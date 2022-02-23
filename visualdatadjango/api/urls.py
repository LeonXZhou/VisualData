from django.urls import path

from . import linear_fit_views


urlpatterns = [
    path('', linear_fit_views.test),
    path('linear/',linear_fit_views.linear)
]