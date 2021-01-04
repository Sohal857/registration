from django import forms
from django.contrib.auth.models import User
from .models import UserProfileInfo
from django_countries.fields import CountryField


class UserForm(forms.ModelForm):
    username = forms.CharField(required = False, widget=forms.TextInput())
    email = forms.CharField(required = False, widget=forms.TextInput())
    first_name = forms.CharField(required = False, widget=forms.TextInput())
    last_name = forms.CharField(required = False, widget=forms.TextInput())
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))
    confirm_password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))
    class Meta():
        model = User
        fields = ('username','first_name','last_name','email','password','confirm_password')
    def clean(self):
        cleaned_data = super(UserForm, self).clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")

        if password != confirm_password:
            raise forms.ValidationError(
                "password and confirm_password does not match"
            )

class UserProfileInfoForm(forms.ModelForm):
    phone_number = forms.CharField(required = False, widget=forms.TextInput())
    street_address = forms.CharField(required = False, widget=forms.TextInput())
    city = forms.CharField(required = False, widget=forms.TextInput())
    zip_code = forms.CharField(required = False, widget=forms.TextInput())
    country = forms.CharField(required = False, widget=forms.TextInput())
    stae = forms.CharField(required = False, widget=forms.TextInput())
    class Meta():
        model = UserProfileInfo
        fields = ('company_name','website','phone_number','unit','street_address','city','zip_code','country','state')
        labels  = {
            'unit':'Appartment/Unit no',
            'state':'State/Province',
        }
        # widgets = {
        #
        #     'website' : forms.TextInput(),
        #     'company' : forms.TextInput(),
        #     'phone_number' : forms.TextInput(),
        #     'unit': forms.TextInput(),
        #     'street_number' : forms.TextInput(),
        #     'city': forms.TextInput(),
        #     'zip_code' : forms.TextInput(),
        #
        # }
