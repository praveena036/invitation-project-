from django.contrib import admin
from django.urls import path

from home import views

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [

    path(
        "admin/",
        admin.site.urls
    ),

    # Home
    path(
        "",
        views.home,
        name="home"
    ),

    # Login
    path(
        "login/",
        views.login_page,
        name="login"
    ),

    # Wishlist
    path(
        "wishlist/",
        views.wishlist_page,
        name="wishlist"
    ),

    # Cart
    path(
        "cart/",
        views.cart_page,
        name="cart"
    ),

]


if settings.DEBUG:

    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )