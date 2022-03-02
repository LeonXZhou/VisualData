from django.urls import path

from . import fit_views


urlpatterns = [
    path('linear/',fit_views.linear),
    path('quadratic/',fit_views.quadratic),
]