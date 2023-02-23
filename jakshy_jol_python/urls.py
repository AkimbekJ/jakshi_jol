from django.urls import path, include

from . import views


urlpatterns = [
    path('news/', views.NewsListCreate.as_view())
]
