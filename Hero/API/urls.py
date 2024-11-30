from django.urls import path
from .views import Homeapi
from .views import Serviceapi
from .views import Productapi
from .views import Portfolioapi
from .views import Contactapi

urlpatterns = [
    path('api/home/', Homeapi.as_view(), name='home'),
    path('api/service/', Serviceapi.as_view(), name='service'),
    path('api/products/', Productapi.as_view(), name='products' ),
    path('api/projects/', Portfolioapi.as_view(), name='projects'),
    path('api/contact/', Contactapi.as_view(), name='contact')
]
