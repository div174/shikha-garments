from rest_framework import viewsets
from .models import Category, SubCategory, Product
from .serializers import CategorySerializer, SubCategorySerializer, ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SubCategoryViewSet(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

from django.core.mail import send_mail
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def log_order_email(request):
    try:
        data = request.data
        subject = f"New Order Inquiry: {data.get('product_name')}"
        message = f"""
        New Order Request Received:
        
        Product: {data.get('product_name')}
        Size: {data.get('size')}
        Quantity: {data.get('quantity')}
        Total Price: ₹{data.get('total_price')}
        
        Logged at: {request.META.get('REMOTE_ADDR')}
        """
        
        send_mail(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_HOST_USER], # Send to self
            fail_silently=False,
        )
        return Response({"status": "Email sent"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
