from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView

from .models import News
from .serializers import NewsSerializer


class NewsListCreate(ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


