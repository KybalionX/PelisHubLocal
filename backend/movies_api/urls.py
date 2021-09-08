from django.contrib import admin
from django.urls import path, include 
from movies_api import views

urlpatterns = [
    path('hello-view/', views.HelloApiView.as_view()),
    path('search/', views.SearchMovie.as_view()),
    path('movie/', views.GetMovie.as_view()),
    path('users/', views.Users.as_view())
]