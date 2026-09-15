from django.shortcuts import render


def home(request):

    return render(
        request,
        "home/index.html"
    )


def login_page(request):

    return render(
        request,
        "home/login.html"
    )


def wishlist_page(request):

    return render(
        request,
        "home/wishlist.html"
    )


def cart_page(request):

    return render(
        request,
        "home/cart.html"
    )