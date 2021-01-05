from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField

class UserProfileInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=50, blank=True, null= True)
    first_name = models.CharField(max_length=50, blank=True, null= True)
    last_name = models.CharField(max_length=50, blank=True, null= True)
    email = models.EmailField(max_length=70,blank=True, null= True)
    website = models.URLField(max_length = 200, blank=True, null= True)
    company_name = models.CharField(max_length = 200, blank=True, null= True)
    phone_number = PhoneNumberField(blank=True, null= True)
    unit = models.CharField(max_length = 100,blank=True, null= True)
    street_address = models.CharField(max_length = 50,blank=True, null= True)
    city = models.CharField(max_length = 50, blank=True, null= True)
    zip_code = models.CharField(max_length = 50, blank=True, null= True)
    country = models.CharField(max_length = 50, blank=True, null= True)
    state = models.CharField(max_length = 50, blank=True, null= True)
    def __str__(self):
        return self.user.username
