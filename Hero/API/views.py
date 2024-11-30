from django.shortcuts import render
from django.core.mail import EmailMessage
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.core.mail import send_mail
from .models import Contact
from .serializers import ContactformSerializer
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives

class Homeapi(APIView):
    def get(self,request):
        data = {"title": "Welcome to BFC", "content": "This is the home page content."}
        return Response(data)

class Serviceapi(APIView):
    def get(self,request):
        data = {"title": "Welcome to BFC", "content": "This is the home page content."}
        return Response(data)
    
class Productapi(APIView):
    def get(self,request):
        data = {"title": "Welcome to BFC", "content": "This is the home page content."}
        return Response(data)
    
class Portfolioapi(APIView):
    def get(self,request):
        data = {"title": "Welcome to BFC", "content": "This is the home page content."}
        return Response(data)

class Contactapi(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # Create a serializer instance with the incoming data
        serializer = ContactformSerializer(data=request.data)

        # Validate the data using the serializer
        if serializer.is_valid():
            # Extract validated data
            name = serializer.validated_data['name']
            phone = serializer.validated_data['phone']
            email = serializer.validated_data['email']
            location = serializer.validated_data['location']
            message = serializer.validated_data['message']

            # Create the HTML email body (with styles)
            html_message = f"""
                <html>
                    <head>
                        <style>
                            body {{
                                font-family: Arial, sans-serif;
                                color: #333;
                                background-color: #f9f9f9;
                                padding: 20px;
                            }}
                            .container {{
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #fff;
                                padding: 20px;
                                border-radius: 8px;
                                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            }}
                            .header {{
                                font-size: 24px;
                                color: #333;
                                margin-bottom: 10px;
                            }}
                            .content {{
                                font-size: 16px;
                                line-height: 1.5;
                            }}
                            .content p {{
                                margin-bottom: 10px;
                            }}
                            .footer {{
                                font-size: 12px;
                                color: #777;
                                text-align: center;
                                margin-top: 20px;
                            }}
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2 class="header">Message from BFC-AI CLIENTS</h2>
                            <div class="content">
                                <p><strong>Name:</strong> {name}</p>
                                <p><strong>Phone:</strong> {phone}</p>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Location:</strong> {location}</p>
                                <p><strong>Message:</strong><br>{message}</p>
                            </div>
                            <div class="footer">
                                <p>Thank you for your inquiry. We will get back to you shortly.</p>
                            </div>
                        </div>
                    </body>
                </html>
            """

            # Plain text version of the email (for clients that don't support HTML)
            plain_message = strip_tags(html_message)

            # Create an EmailMultiAlternatives object (supports both plain and HTML versions)
            email_message = EmailMultiAlternatives(
                'Message from BFC-AI CLIENTS',  # Subject
                plain_message,  # Plain text version
                email,  # Sender's email
                [settings.CONTACT_EMAIL],  # Admin's email
                reply_to=[email],  # Reply to user's email
            )
            email_message.attach_alternative(html_message, "text/html")  # Attach the HTML version
            email_message.send(fail_silently=False)

            # Send a confirmation email to the user who submitted the form
            user_confirmation_message = f"""
                <html>
                    <head>
                        <style>
                            body {{
                                font-family: Arial, sans-serif;
                                color: #333;
                                background-color: #f9f9f9;
                                padding: 20px;
                            }}
                            .container {{
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #fff;
                                padding: 20px;
                                border-radius: 8px;
                                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            }}
                            .header {{
                                font-size: 24px;
                                color: #333;
                                margin-bottom: 10px;
                            }}
                            .content {{
                                font-size: 16px;
                                line-height: 1.5;
                            }}
                            .footer {{
                                font-size: 12px;
                                color: #777;
                                text-align: center;
                                margin-top: 20px;
                            }}
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h2 class="header">Thank You for Contacting Us, {name}!</h2>
                            <div class="content">
                                <p>We have received your message and will get back to you as soon as possible.</p>
                                <p>We appreciate your interest in BFC-AI!</p>
                            </div>
                            <div class="footer">
                                <p>If you have any further questions, feel free to reach out.</p>
                            </div>
                        </div>
                    </body>
                </html>
            """

            # Send email to the user as a confirmation
            send_mail(
                'Thank you for contacting us!',
                strip_tags(user_confirmation_message),  # Plain text version
                settings.DEFAULT_FROM_EMAIL,  # Default sender (or use a custom email)
                [email],  # Send it to the user's email
                html_message=user_confirmation_message,  # HTML email content
                fail_silently=False,
            )

            return Response({"status": "Message sent successfully!"}, status=200)

        # If the data is invalid, return a 400 error with the validation errors
        return Response({"status": "Invalid data!", "errors": serializer.errors}, status=400)