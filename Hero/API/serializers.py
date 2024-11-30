from rest_framework import serializers
from .models import Contact  # Assuming Contact is your model

class ContactformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'phone', 'email', 'location', 'message']
