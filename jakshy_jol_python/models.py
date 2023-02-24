from django.db import models


class News(models.Model):
    number_of_news = models.CharField("Номер статьи", max_length=120)
    text = models.TextField("Текст")

    def __str__(self):
        return self.number_of_news

    class Meta:
        verbose_name = "Нововведения"
        verbose_name_plural = "Нововведения"

