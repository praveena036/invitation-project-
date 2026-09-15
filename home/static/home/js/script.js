/* =========================================================
   CHERISH BY WED KNOT CRAFT
   FINAL CLEAN script.js

   FEATURES:
   - Home / Wedding / Special pages
   - About Us same-page navigation
   - Contact Us same-page navigation
   - How To Order same-page navigation
   - Wishlist
   - Cart
   - Search
   - Login / Signup
   - Theme Cards dropdown
   - Scroll Invitation dropdown
   - Digital Invitation dropdown
   - Digital gallery
   - Theme gallery
   - Scroll gallery
   - Home slider
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
                           ELEMENTS
    ===================================================== */

    const homeView =
        document.getElementById("homeView");

    const weddingView =
        document.getElementById("weddingView");

    const specialView =
        document.getElementById("specialView");

    const loginView =
        document.getElementById("loginView");

    const wishlistView =
        document.getElementById("wishlistView");

    const searchView =
        document.getElementById("searchView");

    const aboutView =
        document.getElementById("aboutView");

    const contactView =
        document.getElementById("contactView");


    /* =====================================================
                         HEADER
    ===================================================== */

    const homeLogo =
        document.getElementById("homeLogo");

    const accountBtn =
        document.getElementById("accountBtn");

    const wishlistBtn =
        document.getElementById("wishlistBtn");

    const cartBtn =
        document.getElementById("cartBtn");


    /* =====================================================
                          CART
    ===================================================== */

    const cartOverlay =
        document.getElementById("cartOverlay");

    const cartClose =
        document.getElementById("cartClose");

    const cartRows =
        document.getElementById("cartRows");

    const cartCount =
        document.getElementById("cartCount");

    const continueShopping =
        document.getElementById("continueShopping");

    const checkoutButton =
        document.getElementById("checkoutButton");


    /* =====================================================
                         WISHLIST
    ===================================================== */

    const wishlistGrid =
        document.getElementById("wishlistGrid");


    /* =====================================================
                           SEARCH
    ===================================================== */

    const searchInput =
        document.getElementById("searchInput");

    const searchBtn =
        document.getElementById("searchBtn");

    const searchPageInput =
        document.getElementById("searchPageInput");

    const searchPageButton =
        document.getElementById("searchPageButton");

    const searchNoResult =
        document.getElementById("searchNoResult");


    /* =====================================================
                           SLIDER
    ===================================================== */

    const featuredImage =
        document.getElementById("featuredImage");

    const nextBtn =
        document.getElementById("nextBtn");

    const prevBtn =
        document.getElementById("prevBtn");

    const exploreBtn =
        document.getElementById("exploreBtn");


    /* =====================================================
                            LOGIN
    ===================================================== */

    const viewLoginTab =
        document.getElementById("viewLoginTab");

    const viewSignupTab =
        document.getElementById("viewSignupTab");

    const viewLoginForm =
        document.getElementById("viewLoginForm");

    const viewSignupForm =
        document.getElementById("viewSignupForm");

    const loginSubmit =
        document.getElementById("loginSubmit");

    const loginEmail =
        document.getElementById("loginEmail");

    const loginPassword =
        document.getElementById("loginPassword");

    const loginSuccess =
        document.getElementById("loginSuccess");


    /* =====================================================
                           SIGNUP
    ===================================================== */

    const signupSubmit =
        document.getElementById("signupSubmit");

    const signupName =
        document.getElementById("signupName");

    const signupEmail =
        document.getElementById("signupEmail");

    const signupPassword =
        document.getElementById("signupPassword");

    const signupSuccess =
        document.getElementById("signupSuccess");


    /* =====================================================
                       ABOUT / CONTACT
    ===================================================== */

    const aboutUsLink =
        document.getElementById("aboutUsLink");

    const footerContactLink =
        document.getElementById("footerContactLink");

    const contactFooterLink =
        document.getElementById("contactFooterLink");


    /* =====================================================
                         DROPDOWNS
    ===================================================== */

    const themeButton =
        document.getElementById("themeCardsBtn");

    const themeMenu =
        document.getElementById("themeMenu");

    const scrollButton =
        document.getElementById("scrollInvitationBtn");

    const scrollMenu =
        document.getElementById("scrollInvitationMenu");

    const digitalButton =
        document.getElementById("digitalInvitationBtn");

    const digitalMenu =
        document.getElementById("digitalInvitationMenu");


    /* =====================================================
                       LOCAL STORAGE
    ===================================================== */

    function getJSON(
        key,
        fallback = []
    ) {

        try {

            const saved =
                localStorage.getItem(key);

            return saved
                ? JSON.parse(saved)
                : fallback;

        } catch (error) {

            return fallback;

        }

    }


    function setJSON(
        key,
        value
    ) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }


    function getWishlist() {

        return getJSON(
            "weddingWishlist",
            []
        );

    }


    function saveWishlist(
        items
    ) {

        setJSON(
            "weddingWishlist",
            items
        );

    }


    function getCart() {

        return getJSON(
            "weddingCart",
            []
        );

    }


    function saveCart(
        items
    ) {

        setJSON(
            "weddingCart",
            items
        );

    }


    /* =====================================================
                           TOAST
    ===================================================== */

    function showToast(
        message
    ) {

        let toast =
            document.getElementById(
                "weddingToast"
            );


        if (!toast) {

            toast =
                document.createElement(
                    "div"
                );


            toast.id =
                "weddingToast";


            toast.style.cssText = `

                position:fixed;
                left:50%;
                bottom:30px;
                z-index:9999999;

                transform:
                    translateX(-50%)
                    translateY(20px);

                padding:
                    12px 20px;

                background:#161616;

                color:#fff;

                border-radius:30px;

                font-size:13px;

                opacity:0;

                transition:
                    opacity .3s ease,
                    transform .3s ease;

                box-shadow:
                    0 12px 30px
                    rgba(0,0,0,.20);

            `;


            document.body.appendChild(
                toast
            );

        }


        toast.textContent =
            message;


        requestAnimationFrame(
            function () {

                toast.style.opacity =
                    "1";

                toast.style.transform =
                    "translateX(-50%) translateY(0)";

            }
        );


        clearTimeout(
            toast._timer
        );


        toast._timer =
            setTimeout(
                function () {

                    toast.style.opacity =
                        "0";

                    toast.style.transform =
                        "translateX(-50%) translateY(20px)";

                },
                2200
            );

    }


    /* =====================================================
                      PAGE VIEW SYSTEM
    ===================================================== */

    function getAllViews() {

        return Array.from(
            document.querySelectorAll(
                ".page-view"
            )
        );

    }


    function hideAllViews() {

        getAllViews()
            .forEach(
                function (view) {

                    view.classList.remove(
                        "active-view"
                    );

                    view.style.display =
                        "none";

                }
            );

    }


    function updateActiveNav(
        viewName
    ) {

        document
            .querySelectorAll(
                ".main-nav .nav-link"
            )
            .forEach(
                function (link) {

                    link.classList.remove(
                        "active"
                    );

                }
            );


        if (
            viewName === "home"
        ) {

            document
                .querySelector(
                    '.main-nav a[href="#home"]'
                )
                ?.classList.add(
                    "active"
                );

        }


        if (
            viewName === "wedding"
        ) {

            document
                .querySelector(
                    '.main-nav a[data-view="wedding"]'
                )
                ?.classList.add(
                    "active"
                );

        }


        if (
            viewName === "special"
        ) {

            document
                .querySelector(
                    '.main-nav a[href="#special"]'
                )
                ?.classList.add(
                    "active"
                );

        }

    }


    function showView(
        viewName,
        shouldScroll = true
    ) {

        hideAllViews();


        let selectedView =
            null;


        if (
            viewName === "home"
        ) {

            selectedView =
                homeView;

        }


        else if (
            viewName === "wedding"
        ) {

            selectedView =
                weddingView;

        }


        else if (
            viewName === "special"
        ) {

            selectedView =
                specialView;

        }


        else if (
            viewName === "login"
        ) {

            selectedView =
                loginView;

        }


        else if (
            viewName === "wishlist"
        ) {

            selectedView =
                wishlistView;

        }


        else if (
            viewName === "search"
        ) {

            selectedView =
                searchView;

        }


        else if (
            viewName === "about"
        ) {

            selectedView =
                aboutView;

        }


        else if (
            viewName === "contact"
        ) {

            selectedView =
                contactView;

        }


        if (selectedView) {

            selectedView.classList.add(
                "active-view"
            );

            selectedView.style.display =
                "block";

        }


        if (
            viewName === "wishlist"
        ) {

            renderWishlist();

        }


        if (
            viewName === "search"
        ) {

            resetSearch();

        }


        updateActiveNav(
            viewName
        );


        if (shouldScroll) {

            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        }

    }


    /* =====================================================
                         CART CLOSE
    ===================================================== */

    function closeCart() {

        cartOverlay?.classList.remove(
            "show"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }


    /* =====================================================
                      DROPDOWNS CLOSE
    ===================================================== */

    function closeAllDropdowns() {

        document
            .querySelectorAll(
                `
                .theme-dropdown-wrapper.open,
                .scroll-dropdown-wrapper.open,
                .digital-dropdown-wrapper.open,
                .nav-dropdown-wrapper.open,
                .cherish-theme-wrap.open,
                .cherish-scroll-wrap.open
                `
            )
            .forEach(
                function (wrapper) {

                    wrapper.classList.remove(
                        "open"
                    );

                }
            );

    }


    /* =====================================================
                         HOME LOGO
    ===================================================== */

    homeLogo?.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            closeAllDropdowns();

            closeCart();

            showView(
                "home"
            );

        }
    );


    /* =====================================================
                           ACCOUNT
    ===================================================== */

    accountBtn?.addEventListener(
        "click",
        function () {

            closeAllDropdowns();

            closeCart();

            showView(
                "login"
            );

        }
    );


    /* =====================================================
                          WISHLIST
    ===================================================== */

    wishlistBtn?.addEventListener(
        "click",
        function () {

            closeAllDropdowns();

            closeCart();

            showView(
                "wishlist"
            );

        }
    );


    /* =====================================================
                            CART
    ===================================================== */

    cartBtn?.addEventListener(
        "click",
        function () {

            closeAllDropdowns();

            renderCart();

            cartOverlay?.classList.add(
                "show"
            );

            document.body.classList.add(
                "modal-open"
            );

        }
    );


    cartClose?.addEventListener(
        "click",
        closeCart
    );


    cartOverlay?.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                cartOverlay
            ) {

                closeCart();

            }

        }
    );


    /* =====================================================
                    CONTINUE SHOPPING
    ===================================================== */

    continueShopping?.addEventListener(
        "click",
        function () {

            closeCart();

            showView(
                "home"
            );

        }
    );


    /* =====================================================
                         CHECKOUT
    ===================================================== */

    checkoutButton?.addEventListener(
        "click",
        function () {

            const cart =
                getCart();


            const totalQty =
                cart.reduce(
                    function (
                        sum,
                        item
                    ) {

                        return sum +
                            Number(
                                item.qty || 1
                            );

                    },
                    0
                );


            if (
                totalQty === 0
            ) {

                showToast(
                    "Your cart is empty"
                );

                return;

            }


            if (
                totalQty < 100
            ) {

                showToast(
                    "Minimum order quantity is 100 items"
                );

                return;

            }


            showToast(
                "Checkout started ❤️"
            );

        }
    );


    /* =====================================================
                      MAIN NAVIGATION
    ===================================================== */

    document
        .querySelectorAll(
            ".main-nav a.nav-link"
        )
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const href =
                            link.getAttribute(
                                "href"
                            ) || "";


                        if (
                            href === "#themes" ||
                            href === "#scroll" ||
                            href === "#digital"
                        ) {

                            return;

                        }


                        event.preventDefault();


                        closeAllDropdowns();


                        if (
                            href === "#home"
                        ) {

                            showView(
                                "home"
                            );

                            return;

                        }


                        if (
                            link.dataset.view ===
                                "wedding" ||
                            href === "#wedding"
                        ) {

                            showView(
                                "wedding"
                            );

                            return;

                        }


                        if (
                            href === "#special"
                        ) {

                            showView(
                                "special"
                            );

                            return;

                        }

                    }
                );

            }
        );


    /* =====================================================
                    ABOUT US
    ===================================================== */

    aboutUsLink?.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            closeCart();

            closeAllDropdowns();

            showView(
                "about"
            );

        }
    );


    /* =====================================================
                    CONTACT US
    ===================================================== */

    function openContactPage(
        event
    ) {

        event.preventDefault();

        event.stopPropagation();

        closeCart();

        closeAllDropdowns();

        showView(
            "contact"
        );

    }


    footerContactLink?.addEventListener(
        "click",
        openContactPage
    );


    contactFooterLink?.addEventListener(
        "click",
        openContactPage
    );


    /* =====================================================
                         SEARCH
    ===================================================== */

    function resetSearch() {

        document
            .querySelectorAll(
                "#searchView .search-card"
            )
            .forEach(
                function (card) {

                    card.style.display =
                        "block";

                }
            );


        searchNoResult?.classList.remove(
            "show"
        );

    }


    function filterSearch(
        query
    ) {

        const text =
            String(
                query || ""
            )
            .trim()
            .toLowerCase();


        let count = 0;


        document
            .querySelectorAll(
                "#searchView .search-card"
            )
            .forEach(
                function (card) {

                    const content =
                        card.textContent
                            .toLowerCase();


                    const visible =
                        !text ||
                        content.includes(
                            text
                        );


                    card.style.display =
                        visible
                            ? "block"
                            : "none";


                    if (visible) {

                        count++;

                    }

                }
            );


        searchNoResult?.classList.toggle(
            "show",
            count === 0
        );

    }


    searchBtn?.addEventListener(
        "click",
        function () {

            closeCart();

            closeAllDropdowns();

            showView(
                "search"
            );


            setTimeout(
                function () {

                    searchPageInput?.focus();

                },
                200
            );

        }
    );


    searchInput?.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Enter"
            ) {

                return;

            }


            event.preventDefault();


            const value =
                searchInput.value;


            showView(
                "search"
            );


            setTimeout(
                function () {

                    if (
                        searchPageInput
                    ) {

                        searchPageInput.value =
                            value;

                    }


                    filterSearch(
                        value
                    );

                },
                100
            );

        }
    );


    searchPageButton?.addEventListener(
        "click",
        function () {

            filterSearch(
                searchPageInput?.value ||
                ""
            );

        }
    );


    /* =====================================================
                         PRODUCT DATA
    ===================================================== */

    function getProductData(
        card
    ) {

        const image =
            card
                .querySelector(
                    ".product-image img"
                )
                ?.getAttribute(
                    "src"
                ) || "";


        const name =
            card.dataset.name ||
            card
                .querySelector(
                    ".product-content h3"
                )
                ?.textContent
                .trim() ||
            "Wedding Card";


        const price =
            Number(
                card.dataset.price ||
                0
            );


        const description =
            card.dataset.description ||
            card
                .querySelector(
                    ".product-content p"
                )
                ?.textContent
                .trim() ||
            "";


        return {

            name,
            price,
            image,
            description

        };

    }


    /* =====================================================
                    PRODUCT HEART SYNC
    ===================================================== */

    function syncProductHearts() {

        const wishlist =
            getWishlist();


        document
            .querySelectorAll(
                ".product-card"
            )
            .forEach(
                function (card) {

                    const product =
                        getProductData(
                            card
                        );


                    const heart =
                        card
                            .querySelector(
                                ".heart-btn"
                            );


                    const exists =
                        wishlist.some(
                            function (
                                item
                            ) {

                                return item.name ===
                                    product.name;

                            }
                        );


                    heart?.classList.toggle(
                        "selected",
                        exists
                    );

                }
            );

    }


    /* =====================================================
                PRODUCT HEART / CART
    ===================================================== */

    document
        .querySelectorAll(
            ".product-card"
        )
        .forEach(
            function (card) {

                const product =
                    getProductData(
                        card
                    );


                const heart =
                    card
                        .querySelector(
                            ".heart-btn"
                        );


                const addCart =
                    card
                        .querySelector(
                            ".cart-add"
                        );


                /* HEART */

                heart?.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        event.stopPropagation();


                        const wishlist =
                            getWishlist();


                        const index =
                            wishlist.findIndex(
                                function (
                                    item
                                ) {

                                    return item.name ===
                                        product.name;

                                }
                            );


                        if (
                            index >= 0
                        ) {

                            wishlist.splice(
                                index,
                                1
                            );


                            heart.classList.remove(
                                "selected"
                            );


                            showToast(
                                "Removed from wishlist"
                            );

                        } else {

                            wishlist.push(
                                product
                            );


                            heart.classList.add(
                                "selected"
                            );


                            showToast(
                                "Added to wishlist ❤️"
                            );

                        }


                        saveWishlist(
                            wishlist
                        );


                        if (
                            wishlistView?.classList.contains(
                                "active-view"
                            )
                        ) {

                            renderWishlist();

                        }

                    }
                );


                /* CART */

                addCart?.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        event.stopPropagation();


                        addToCart(
                            product
                        );


                        addCart.classList.add(
                            "selected"
                        );


                        setTimeout(
                            function () {

                                addCart.classList.remove(
                                    "selected"
                                );

                            },
                            500
                        );

                    }
                );

            }
        );


    /* =====================================================
                     WISHLIST RENDER
    ===================================================== */

    function renderWishlist() {

        if (
            !wishlistGrid
        ) {

            return;

        }


        const wishlist =
            getWishlist();


        if (
            wishlist.length === 0
        ) {

            wishlistGrid.innerHTML = `

                <div
                    class="empty-wishlist"
                >

                    <h2>
                        Your Wishlist is Empty
                    </h2>

                    <p>
                        Save your favourite
                        wedding cards here ❤️
                    </p>

                </div>

            `;


            return;

        }


        wishlistGrid.innerHTML =
            wishlist
                .map(
                    function (
                        item,
                        index
                    ) {

                        return `

                            <article
                                class="wishlist-card"
                            >

                                <button
                                    type="button"
                                    class="wishlist-heart"
                                    data-index="${index}"
                                >
                                    ♥
                                </button>


                                <div
                                    class="wishlist-card-image"
                                >

                                    <img
                                        src="${item.image}"
                                        alt="${item.name}"
                                    >

                                </div>


                                <div
                                    class="wishlist-card-info"
                                >

                                    <h3>
                                        ${item.name}
                                    </h3>

                                    <p>
                                        ₹${Number(
                                            item.price || 0
                                        ).toFixed(2)}
                                    </p>

                                </div>

                            </article>

                        `;

                    }
                )
                .join("");


        wishlistGrid
            .querySelectorAll(
                ".wishlist-heart"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            const index =
                                Number(
                                    button.dataset.index
                                );


                            const wishlist =
                                getWishlist();


                            wishlist.splice(
                                index,
                                1
                            );


                            saveWishlist(
                                wishlist
                            );


                            renderWishlist();

                            syncProductHearts();

                        }
                    );

                }
            );

    }


    /* =====================================================
                          CART DATA
    ===================================================== */

    function addToCart(
        product
    ) {

        const cart =
            getCart();


        const existing =
            cart.find(
                function (
                    item
                ) {

                    return item.name ===
                        product.name;

                }
            );


        if (
            existing
        ) {

            existing.qty =
                Number(
                    existing.qty || 1
                ) + 1;

        } else {

            cart.push({

                name:
                    product.name,

                price:
                    Number(
                        product.price || 0
                    ),

                image:
                    product.image,

                description:
                    product.description,

                qty:
                    1

            });

        }


        saveCart(
            cart
        );


        updateCartCount();


        showToast(
            "Added to cart ❤️"
        );

    }


    /* =====================================================
                       CART COUNT
    ===================================================== */

    function updateCartCount() {

        if (
            !cartCount
        ) {

            return;

        }


        const cart =
            getCart();


        const quantity =
            cart.reduce(
                function (
                    total,
                    item
                ) {

                    return total +
                        Number(
                            item.qty || 1
                        );

                },
                0
            );


        cartCount.textContent =
            quantity;

    }


    /* =====================================================
                      CART RENDER
    ===================================================== */

    function renderCart() {

        if (
            !cartRows
        ) {

            return;

        }


        const subtotalElement =
            document.getElementById(
                "subtotal"
            );


        const taxElement =
            document.getElementById(
                "totalTax"
            );


        const totalElement =
            document.getElementById(
                "grandTotal"
            );


        const cart =
            getCart();


        cartRows.innerHTML =
            "";


        let subtotal = 0;

        let totalTax = 0;


        if (
            cart.length === 0
        ) {

            cartRows.innerHTML = `

                <div
                    class="empty-cart"
                >

                    <div
                        class="empty-cart-icon"
                    >
                        🛒
                    </div>

                    <h3>
                        Your cart is empty
                    </h3>

                    <p>
                        Add beautiful wedding
                        cards to your cart.
                    </p>

                </div>

            `;

        } else {

            cart.forEach(
                function (
                    item,
                    index
                ) {

                    const quantity =
                        Number(
                            item.qty || 1
                        );


                    const price =
                        Number(
                            item.price || 0
                        );


                    const itemSubtotal =
                        quantity *
                        price;


                    const tax =
                        itemSubtotal *
                        0.05;


                    const itemTotal =
                        itemSubtotal +
                        tax;


                    subtotal +=
                        itemSubtotal;


                    totalTax +=
                        tax;


                    const row =
                        document.createElement(
                            "div"
                        );


                    row.className =
                        "cart-row";


                    row.innerHTML = `

                        <div
                            class="cart-product"
                        >

                            <img
                                src="${item.image}"
                                alt="${item.name}"
                            >


                            <div>

                                <strong
                                    class="cart-product-name"
                                >
                                    ${item.name}
                                </strong>

                            </div>

                        </div>


                        <div>

                            <button
                                type="button"
                                class="qty-minus"
                                data-index="${index}"
                            >
                                −
                            </button>


                            <strong
                                style="margin:0 8px"
                            >
                                ${quantity}
                            </strong>


                            <button
                                type="button"
                                class="qty-plus"
                                data-index="${index}"
                            >
                                +
                            </button>

                        </div>


                        <div>
                            ₹${price.toFixed(2)}
                        </div>


                        <div>
                            ₹${tax.toFixed(2)}
                        </div>


                        <div>

                            ₹${itemTotal.toFixed(2)}

                            <button
                                type="button"
                                class="remove-cart"
                                data-index="${index}"
                                style="
                                    margin-left:10px;
                                    border:0;
                                    background:transparent;
                                    cursor:pointer;
                                "
                            >
                                ✕
                            </button>

                        </div>

                    `;


                    cartRows.appendChild(
                        row
                    );

                }
            );

        }


        if (
            subtotalElement
        ) {

            subtotalElement.textContent =
                `₹${subtotal.toFixed(2)}`;

        }


        if (
            taxElement
        ) {

            taxElement.textContent =
                `₹${totalTax.toFixed(2)}`;

        }


        if (
            totalElement
        ) {

            totalElement.textContent =
                `₹${(
                    subtotal +
                    totalTax
                ).toFixed(2)}`;

        }


        /* MINUS */

        cartRows
            .querySelectorAll(
                ".qty-minus"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            changeQuantity(
                                Number(
                                    button.dataset.index
                                ),
                                -1
                            );

                        }
                    );

                }
            );


        /* PLUS */

        cartRows
            .querySelectorAll(
                ".qty-plus"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            changeQuantity(
                                Number(
                                    button.dataset.index
                                ),
                                1
                            );

                        }
                    );

                }
            );


        /* REMOVE */

        cartRows
            .querySelectorAll(
                ".remove-cart"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            removeCartItem(
                                Number(
                                    button.dataset.index
                                )
                            );

                        }
                    );

                }
            );


        updateCartCount();

    }


    function changeQuantity(
        index,
        change
    ) {

        const cart =
            getCart();


        if (
            !cart[index]
        ) {

            return;

        }


        cart[index].qty =
            Number(
                cart[index].qty || 1
            ) + change;


        if (
            cart[index].qty <= 0
        ) {

            cart.splice(
                index,
                1
            );

        }


        saveCart(
            cart
        );


        renderCart();

    }


    function removeCartItem(
        index
    ) {

        const cart =
            getCart();


        cart.splice(
            index,
            1
        );


        saveCart(
            cart
        );


        renderCart();

    }


    /* =====================================================
                       SPECIAL OCCASIONS
    ===================================================== */

    const specialData = {

        birthday: {

            title:
                "Birthday Invitations",

            subtitle:
                "Beautiful birthday invitations for a memorable celebration."

        },


        puberty: {

            title:
                "Puperty Cards",

            subtitle:
                "Elegant traditional designs for a special milestone."

        },


        luxury: {

            title:
                "Luxury Invitations",

            subtitle:
                "Premium invitation designs for grand occasions."

        },


        earboring: {

            title:
                "Ear Boring Cards",

            subtitle:
                "Traditional and beautiful ceremony invitations."

        },


        engagement: {

            title:
                "Engagement Cards",

            subtitle:
                "Romantic invitation designs for your beautiful beginning."

        },


        housewarming: {

            title:
                "House Warming",

            subtitle:
                "Beautiful invitations to celebrate your new home."

        },


        anniversary: {

            title:
                "Anniversary Cards",

            subtitle:
                "Beautiful designs to celebrate your journey together."

        }

    };


    function selectSpecialCategory(
        category
    ) {

        const data =
            specialData[category] ||
            specialData.birthday;


        const title =
            document.getElementById(
                "specialTitle"
            );


        const subtitle =
            document.getElementById(
                "specialSubtitle"
            );


        if (
            title
        ) {

            title.textContent =
                data.title;

        }


        if (
            subtitle
        ) {

            subtitle.textContent =
                data.subtitle;

        }


        document
            .querySelectorAll(
                ".special-category-btn"
            )
            .forEach(
                function (
                    button
                ) {

                    button.classList.toggle(
                        "active",
                        button.dataset.specialFilter ===
                        category
                    );

                }
            );


        document
            .querySelectorAll(
                ".special-card"
            )
            .forEach(
                function (
                    card
                ) {

                    card.style.display =
                        card.dataset.specialCategory ===
                        category
                            ? ""
                            : "none";

                }
            );

    }


    document
        .querySelectorAll(
            ".special-category-btn"
        )
        .forEach(
            function (
                button
            ) {

                button.addEventListener(
                    "click",
                    function () {

                        selectSpecialCategory(
                            button.dataset.specialFilter
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            ".special-item"
        )
        .forEach(
            function (
                item
            ) {

                item.addEventListener(
                    "click",
                    function (
                        event
                    ) {

                        event.preventDefault();

                        event.stopPropagation();


                        closeAllDropdowns();


                        showView(
                            "special"
                        );


                        selectSpecialCategory(
                            item.dataset.special ||
                            "birthday"
                        );

                    }
                );

            }
        );


    /* =====================================================
                         THEME DATA
    ===================================================== */

    const themeData = {

        beach: {

            title:
                "Beach Theme Cards",

            subtitle:
                "Fresh and romantic seaside wedding designs.",

            images: [

                "/media/images/Beach_Wedding.png",

                "/media/images/Watercolor.png",

                "/media/images/Minimal_Blue.png"

            ]

        },


        bride: {

            title:
                "Bride Theme Cards",

            subtitle:
                "Elegant bridal invitation designs.",

            images: [

                "/media/images/Elegant_Flora.png",

                "/media/images/Elegant_Vintage.png",

                "/media/images/Elegant_Peacock.png"

            ]

        },


        box: {

            title:
                "Box Cards",

            subtitle:
                "Premium luxurious box-style invitations.",

            images: [

                "/media/images/Gate_fold.png",

                "/media/images/Gold_Plated.png",

                "/media/images/Golden_Ornament.png"

            ]

        },


        single: {

            title:
                "Single Sheet Cards",

            subtitle:
                "Minimal and stylish invitation designs.",

            images: [

                "/media/images/Minimal_Blue.png",

                "/media/images/Design_-_Playground.png",

                "/media/images/Wedding_card.png"

            ]

        }

    };


    /* =====================================================
                         SCROLL DATA
    ===================================================== */

    const scrollData = {

        small: {

            title:
                "Small Size Scroll",

            subtitle:
                "Elegant compact scroll invitations for intimate celebrations.",

            images: [

                "/media/images/Wedding_card.png",

                "/media/images/Minimal_Blue.png",

                "/media/images/Elegant_Kerala.png"

            ]

        },


        box: {

            title:
                "Box Scroll",

            subtitle:
                "Luxury box-style invitations for a premium impression.",

            images: [

                "/media/images/Gate_fold.png",

                "/media/images/Gold_Plated.png",

                "/media/images/Golden_Ornament.png"

            ]

        },


        only: {

            title:
                "Only Scroll",

            subtitle:
                "Classic traditional scroll invitation designs.",

            images: [

                "/media/images/Elegant_Vintage.png",

                "/media/images/Wedding_card.png",

                "/media/images/Minimal_Blue.png"

            ]

        },


        high: {

            title:
                "High End Scroll",

            subtitle:
                "Premium wedding invitation designs for grand celebrations.",

            images: [

                "/media/images/Royal_Wedding.png",

                "/media/images/Golden_Ornament.png",

                "/media/images/Gold_Plated.png"

            ]

        }

    };


    /* =====================================================
                       COMMON GALLERY
    ===================================================== */

    function openGallery(
        data
    ) {

        document
            .getElementById(
                "cherishGallery"
            )
            ?.remove();


        const overlay =
            document.createElement(
                "div"
            );


        overlay.id =
            "cherishGallery";


        overlay.style.cssText = `

            position:fixed;

            inset:0;

            z-index:9999999;

            overflow-y:auto;

            padding:30px 5%;

            background:
                rgba(18,16,27,.76);

            backdrop-filter:
                blur(12px);

        `;


        overlay.innerHTML = `

            <div
                style="
                    width:min(1200px,100%);
                    margin:20px auto 40px;
                    padding:32px;
                    background:#f8f5ff;
                    border-radius:26px;
                    box-shadow:
                        0 30px 90px
                        rgba(0,0,0,.28);
                "
            >

                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        gap:20px;
                        margin-bottom:28px;
                    "
                >

                    <div>

                        <div
                            style="
                                font-size:10px;
                                letter-spacing:3px;
                                color:#9a7619;
                                font-weight:600;
                            "
                        >
                            CHERISH COLLECTION
                        </div>


                        <h2
                            style="
                                margin:8px 0;
                                font-family:
                                    'Cormorant Garamond',
                                    serif;
                                font-size:46px;
                                color:#17151a;
                            "
                        >
                            ${data.title}
                        </h2>


                        <p
                            style="
                                color:#777;
                                font-size:13px;
                            "
                        >
                            ${data.subtitle}
                        </p>

                    </div>


                    <button
                        type="button"
                        class="gallery-close-btn"
                        style="
                            width:46px;
                            height:46px;
                            border:0;
                            border-radius:50%;
                            background:#181818;
                            color:#fff;
                            font-size:28px;
                            cursor:pointer;
                        "
                    >
                        ×
                    </button>

                </div>


                <div
                    style="
                        display:grid;
                        grid-template-columns:
                            repeat(3,1fr);
                        gap:22px;
                    "
                >

                    ${data.images.map(
                        (
                            image,
                            index
                        ) => `

                            <article
                                style="
                                    overflow:hidden;
                                    background:#fff;
                                    border-radius:18px;
                                    box-shadow:
                                        0 12px 30px
                                        rgba(0,0,0,.10);
                                "
                            >

                                <div
                                    style="
                                        height:410px;
                                        overflow:hidden;
                                        display:flex;
                                        align-items:center;
                                        justify-content:center;
                                        background:#fff;
                                    "
                                >

                                    <img
                                        src="${image}"
                                        alt="${data.title}"
                                        style="
                                            width:100%;
                                            height:100%;
                                            object-fit:contain;
                                            padding:12px;
                                            transition:
                                                transform .5s ease;
                                        "
                                    >

                                </div>


                                <div
                                    style="
                                        padding:
                                            13px 15px;
                                        font-size:12px;
                                        font-weight:600;
                                    "
                                >

                                    ${String(
                                        index + 1
                                    ).padStart(
                                        2,
                                        "0"
                                    )}

                                    &nbsp;

                                    ${data.title}

                                </div>

                            </article>

                        `
                    ).join("")}

                </div>

            </div>

        `;


        document.body.appendChild(
            overlay
        );


        overlay
            .querySelector(
                ".gallery-close-btn"
            )
            ?.addEventListener(
                "click",
                function () {

                    overlay.remove();

                }
            );


        overlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    overlay
                ) {

                    overlay.remove();

                }

            }
        );

    }


    /* =====================================================
                       THEME ITEMS
    ===================================================== */

    document
        .querySelectorAll(
            ".theme-item"
        )
        .forEach(
            function (
                item
            ) {

                item.addEventListener(
                    "click",
                    function (
                        event
                    ) {

                        event.preventDefault();

                        event.stopPropagation();


                        const data =
                            themeData[
                                item.dataset.theme
                            ];


                        if (
                            !data
                        ) {

                            return;

                        }


                        closeAllDropdowns();


                        openGallery(
                            data
                        );

                    }
                );

            }
        );


    /* =====================================================
                       SCROLL ITEMS
    ===================================================== */

    document
        .querySelectorAll(
            ".scroll-item"
        )
        .forEach(
            function (
                item
            ) {

                item.addEventListener(
                    "click",
                    function (
                        event
                    ) {

                        event.preventDefault();

                        event.stopPropagation();


                        const data =
                            scrollData[
                                item.dataset.scrollType
                            ];


                        if (
                            !data
                        ) {

                            return;

                        }


                        closeAllDropdowns();


                        openGallery(
                            data
                        );

                    }
                );

            }
        );


    /* =====================================================
                       DIGITAL INVITATION
    ===================================================== */

    const digitalData = {

        whatsapp: {

            title:
                "Whatsapp Cards",

            subtitle:
                "Beautiful invitations made for sharing",

            image:
                "/media/images/Wedding_card.png",

            cards: [

                {

                    title:
                        "Floral WhatsApp Invite",

                    image:
                        "/media/images/Elegant_Flora.png",

                    text:
                        "Elegant floral digital wedding invite"

                },

                {

                    title:
                        "Luxury WhatsApp Invite",

                    image:
                        "/media/images/Gold_Plated.png",

                    text:
                        "Premium luxury invitation"

                },

                {

                    title:
                        "Traditional WhatsApp Invite",

                    image:
                        "/media/images/Wedding_card.png",

                    text:
                        "Classic wedding invitation design"

                }

            ]

        },


        save: {

            title:
                "Save the Date Cards",

            subtitle:
                "Elegant announcement designs",

            image:
                "/media/images/Elegant_Flora.png",

            cards: [

                {

                    title:
                        "Classic Save the Date",

                    image:
                        "/media/images/Minimal_Blue.png",

                    text:
                        "Clean and elegant announcement"

                },

                {

                    title:
                        "Royal Save the Date",

                    image:
                        "/media/images/Royal_Wedding.png",

                    text:
                        "Grand royal invitation style"

                },

                {

                    title:
                        "Floral Save the Date",

                    image:
                        "/media/images/Elegant_Flora.png",

                    text:
                        "Soft romantic announcement"

                }

            ]

        },


        animated: {

            title:
                "Animated Wedding Cards",

            subtitle:
                "Bring your wedding story to life",

            image:
                "/media/images/Royal_Wedding.png",

            cards: [

                {

                    title:
                        "Romantic Animation",

                    image:
                        "/media/images/Elegant_Vintage.png",

                    text:
                        "Romantic cinematic wedding style"

                },

                {

                    title:
                        "Royal Animation",

                    image:
                        "/media/images/Royal_Wedding.png",

                    text:
                        "Premium animated wedding style"

                },

                {

                    title:
                        "Floral Animation",

                    image:
                        "/media/images/Beach_Wedding.png",

                    text:
                        "Beautiful floral animation"

                }

            ]

        },


        event: {

            title:
                "Event E-Invites",

            subtitle:
                "Modern invitations for every occasion",

            image:
                "/media/images/Watercolor.png",

            cards: [

                {

                    title:
                        "Engagement E-Invite",

                    image:
                        "/media/images/engaement.png",

                    text:
                        "Elegant engagement invitation"

                },

                {

                    title:
                        "Birthday E-Invite",

                    image:
                        "/media/images/yellow.png",

                    text:
                        "Fun and stylish birthday design"

                },

                {

                    title:
                        "Reception E-Invite",

                    image:
                        "/media/images/cafe.png",

                    text:
                        "Modern reception invitation"

                }

            ]

        }

    };


    /* =====================================================
                       DIGITAL BUTTON
    ===================================================== */

    digitalButton?.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            const wrapper =
                digitalButton.parentElement;


            const isOpen =
                wrapper?.classList.contains(
                    "open"
                );


            closeAllDropdowns();


            if (
                !isOpen
            ) {

                wrapper?.classList.add(
                    "open"
                );

            }

        }
    );


    /* =====================================================
                       DIGITAL ITEMS
    ===================================================== */

    document
        .querySelectorAll(
            ".digital-item"
        )
        .forEach(
            function (
                item
            ) {

                item.addEventListener(
                    "click",
                    function (
                        event
                    ) {

                        event.preventDefault();

                        event.stopPropagation();


                        const data =
                            digitalData[
                                item.dataset.digitalType
                            ];


                        if (
                            !data
                        ) {

                            return;

                        }


                        closeAllDropdowns();


                        showDigitalGallery(
                            data
                        );

                    }
                );

            }
        );


    /* =====================================================
                       DIGITAL GALLERY
    ===================================================== */

    function showDigitalGallery(
        data
    ) {

        let modal =
            document.getElementById(
                "digitalShowcase"
            );


        if (
            !modal
        ) {

            modal =
                document.createElement(
                    "div"
                );


            modal.id =
                "digitalShowcase";


            modal.className =
                "digital-showcase";


            modal.innerHTML = `

                <div
                    class="
                        digital-showcase-backdrop
                    "
                ></div>


                <div
                    class="
                        digital-showcase-box
                    "
                >

                    <button
                        type="button"
                        class="
                            digital-showcase-close
                        "
                    >
                        ×
                    </button>


                    <div
                        class="
                            digital-showcase-header
                        "
                    >

                        <span>
                            DIGITAL COLLECTION
                        </span>


                        <h2
                            id="digitalGalleryTitle"
                        ></h2>


                        <p
                            id="digitalGallerySubtitle"
                        ></p>

                    </div>


                    <div
                        class="
                            digital-feature-image
                        "
                    >

                        <img
                            id="digitalFeatureImage"
                            alt="Digital Invitation"
                        >

                    </div>


                    <div
                        class="
                            digital-template-grid
                        "
                        id="digitalTemplateGrid"
                    ></div>

                </div>

            `;


            document.body.appendChild(
                modal
            );


            modal
                .querySelector(
                    ".digital-showcase-close"
                )
                ?.addEventListener(
                    "click",
                    closeDigitalGallery
                );


            modal
                .querySelector(
                    ".digital-showcase-backdrop"
                )
                ?.addEventListener(
                    "click",
                    closeDigitalGallery
                );

        }


        const title =
            modal.querySelector(
                "#digitalGalleryTitle"
            );


        const subtitle =
            modal.querySelector(
                "#digitalGallerySubtitle"
            );


        const feature =
            modal.querySelector(
                "#digitalFeatureImage"
            );


        const grid =
            modal.querySelector(
                "#digitalTemplateGrid"
            );


        if (
            title
        ) {

            title.textContent =
                data.title;

        }


        if (
            subtitle
        ) {

            subtitle.textContent =
                data.subtitle;

        }


        if (
            feature
        ) {

            feature.src =
                data.image;

        }


        if (
            grid
        ) {

            grid.innerHTML =
                data.cards
                    .map(
                        function (
                            card
                        ) {

                            return `

                                <article
                                    class="
                                        digital-template-card
                                    "
                                >

                                    <img
                                        src="${card.image}"
                                        alt="${card.title}"
                                    >


                                    <div
                                        class="
                                            digital-template-info
                                        "
                                    >

                                        <h3>
                                            ${card.title}
                                        </h3>


                                        <p>
                                            ${card.text}
                                        </p>


                                        <button
                                            type="button"
                                            class="
                                                digital-preview-btn
                                            "
                                        >
                                            Preview
                                        </button>

                                    </div>

                                </article>

                            `;

                        }
                    )
                    .join("");

        }


        modal.classList.add(
            "active"
        );


        document.body.classList.add(
            "digital-modal-open"
        );

    }


    function closeDigitalGallery() {

        const modal =
            document.getElementById(
                "digitalShowcase"
            );


        modal?.classList.remove(
            "active"
        );


        document.body.classList.remove(
            "digital-modal-open"
        );

    }


    /* =====================================================
                         HOME SLIDER
    ===================================================== */

    const sliderImages = [

        "/media/images/BC_1152_Floral.png",

        "/media/images/Beach_Wedding.png",

        "/media/images/Elegant_Hindu.png",

        "/media/images/Elegant_Flora.png",

        "/media/images/Dark_green.png",

        "/media/images/Elegant_Kerala.png"

    ];


    let sliderIndex = 0;


    function showSlide(
        index
    ) {

        if (
            !featuredImage
        ) {

            return;

        }


        featuredImage.style.opacity =
            "0";


        setTimeout(
            function () {

                featuredImage.src =
                    sliderImages[index];


                featuredImage.style.opacity =
                    "1";

            },
            150
        );

    }


    nextBtn?.addEventListener(
        "click",
        function () {

            sliderIndex =
                (
                    sliderIndex + 1
                ) %
                sliderImages.length;


            showSlide(
                sliderIndex
            );

        }
    );


    prevBtn?.addEventListener(
        "click",
        function () {

            sliderIndex =
                (
                    sliderIndex - 1 +
                    sliderImages.length
                ) %
                sliderImages.length;


            showSlide(
                sliderIndex
            );

        }
    );


    exploreBtn?.addEventListener(
        "click",
        function () {

            showView(
                "wedding"
            );

        }
    );


    /* =====================================================
                       LOGIN / SIGNUP
    ===================================================== */

    viewLoginTab?.addEventListener(
        "click",
        function () {

            viewLoginTab.classList.add(
                "active"
            );

            viewSignupTab?.classList.remove(
                "active"
            );


            viewLoginForm?.classList.remove(
                "hidden"
            );

            viewSignupForm?.classList.add(
                "hidden"
            );

        }
    );


    viewSignupTab?.addEventListener(
        "click",
        function () {

            viewSignupTab.classList.add(
                "active"
            );

            viewLoginTab?.classList.remove(
                "active"
            );


            viewSignupForm?.classList.remove(
                "hidden"
            );

            viewLoginForm?.classList.add(
                "hidden"
            );

        }
    );


    loginSubmit?.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const email =
                loginEmail?.value.trim() || "";


            const password =
                loginPassword?.value.trim() || "";


            if (
                !email ||
                !password
            ) {

                showToast(
                    "Please enter email and password"
                );

                return;

            }


            if (
                loginSuccess
            ) {

                loginSuccess.textContent =
                    "Login successful ❤️";

                loginSuccess.style.display =
                    "block";

            }


            showToast(
                "Login successful ❤️"
            );

        }
    );


    signupSubmit?.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const name =
                signupName?.value.trim() || "";


            const email =
                signupEmail?.value.trim() || "";


            const password =
                signupPassword?.value.trim() || "";


            if (
                !name ||
                !email ||
                !password
            ) {

                showToast(
                    "Please fill all signup details"
                );

                return;

            }


            if (
                signupSuccess
            ) {

                signupSuccess.textContent =
                    "Signup successful ❤️";

                signupSuccess.style.display =
                    "block";

            }


            showToast(
                "Signup successful ❤️"
            );

        }
    );


    /* =====================================================
                     INITIAL STATE
    ===================================================== */

    updateCartCount();

    syncProductHearts();

    showView(
        "home",
        false
    );


    /* =====================================================
                          FAQ PAGE
    ===================================================== */

    const faqQuestions = [

        "How much do Indian wedding invitation cards typically cost?",

        "Do you provide sample card before finalizing the order?",

        "Do you provide printing services?",

        "How much time will it take for the complete procedure for an order?",

        "Do you provide add on cards like Rsvp, Thank you cards etc.?",

        "Do you provide the text samples of addon cards?",

        "Could you suggest me, wordings, symbols, logos for the order?",

        "How to place the order after selecting the card?",

        "Can I add up extra page / insert in the card?",

        "How do we pay through online?"

    ];


    const faqAnswers = [

        "The cost of Indian wedding cards can vary widely depending on several factors such as design complexity, materials used, customization options, and quantity ordered. Typically, Indian wedding invitations can range from affordable options to more extravagant and luxurious choices.",

        "We don't practise business by providing sample cards, since all the cards are manufactured against order. Once the customer places the order, we go for the manufacturing process. So we don’t keep sample cards to carry.",

        "Yes, we provide the cards with printing. The text can be printed in ink, foil and by using thermographic process.",

        "Once the customer approve the proof and after the confirmation of the payment, we shall start the printing process and deliver the cards in ten working days time. Then the cards can be shipped across in three to four days, which is to be door delivered.",

        "Yes, we provide full range of save the date card, Rsvp card, Thank you card, Place card, Reception card, Sangeet card, Cocktail card, Mehendi card etc.",

        "Kindly visit the text samples link for the text samples.",

        "You can select appropriate text for your card with related logos and fonts as specified in the available options.",

        "You can choose a card from the hosted list and initially register with us for proceeding to the order booking. After registration, you can book the card with the quantity required and other details.",

        "You can add extra inserts to your card. The charges for the insert and the printing charges will be additional.",

        "After all your selections are finished, you can use the view cost option to view the entire selections of cards with their prices and shipping cost. Then click on the pay icon which will take you to the online payment gateway through which the payment can be done online. After confirmation of the payment, we shall start the manufacturing process."

    ];


    function createFaqPage() {

        let faqView =
            document.getElementById(
                "faqView"
            );


        if (
            faqView
        ) {

            return faqView;

        }


        faqView =
            document.createElement(
                "section"
            );


        faqView.id =
            "faqView";


        faqView.className =
            "page-view faq-page-view";


        const container =
            document.createElement(
                "div"
            );


        container.className =
            "faq-page-container";


        const title =
            document.createElement(
                "h1"
            );


        title.className =
            "faq-page-title";


        title.textContent =
            "FREQUENTLY ASKED QUESTIONS";


        container.appendChild(
            title
        );


        faqQuestions.forEach(
            function (
                question,
                index
            ) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "faq-item";


                const questionBox =
                    document.createElement(
                        "div"
                    );


                questionBox.className =
                    "faq-question";


                questionBox.textContent =
                    (index + 1) +
                    ". " +
                    question;


                const answerBox =
                    document.createElement(
                        "div"
                    );


                answerBox.className =
                    "faq-answer";


                const answerText =
                    document.createElement(
                        "p"
                    );


                answerText.textContent =
                    faqAnswers[index];


                answerBox.appendChild(
                    answerText
                );


                item.appendChild(
                    questionBox
                );


                item.appendChild(
                    answerBox
                );


                container.appendChild(
                    item
                );

            }
        );


        const finalText =
            document.createElement(
                "p"
            );


        finalText.className =
            "faq-final-line";


        finalText.textContent =
            "If you have any query related to invitation designs or our cards, please feel free to contact us!!!";


        container.appendChild(
            finalText
        );


        faqView.appendChild(
            container
        );


        const main =
            document.querySelector(
                "main"
            );


        if (
            main
        ) {

            main.appendChild(
                faqView
            );

        } else {

            document.body.appendChild(
                faqView
            );

        }


        return faqView;

    }


    function openFaqPage(
        event
    ) {

        event.preventDefault();

        event.stopPropagation();


        const faqView =
            createFaqPage();


        document
            .querySelectorAll(
                ".page-view"
            )
            .forEach(
                function (
                    view
                ) {

                    view.classList.remove(
                        "active-view"
                    );


                    view.style.display =
                        "none";

                }
            );


        faqView.classList.add(
            "active-view"
        );


        faqView.style.display =
            "block";


        closeCart();

        closeAllDropdowns();


        document
            .querySelectorAll(
                ".main-nav .nav-link"
            )
            .forEach(
                function (
                    link
                ) {

                    link.classList.remove(
                        "active"
                    );

                }
            );


        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }


    /* =====================================================
                           FAQ CLICK
    ===================================================== */

    document.addEventListener(
        "click",
        function (
            event
        ) {

            const link =
                event.target.closest(
                    "a"
                );


            if (
                !link
            ) {

                return;

            }


            const text =
                (
                    link.textContent ||
                    ""
                )
                .trim()
                .toLowerCase();


            const href =
                (
                    link.getAttribute(
                        "href"
                    ) ||
                    ""
                )
                .trim()
                .toLowerCase();


            if (
                text === "faq" ||
                href === "#faq"
            ) {

                openFaqPage(
                    event
                );

            }

        },
        true
    );


    /* =====================================================
                    HOW TO ORDER PAGE
    ===================================================== */

    const howOrderSteps = [

        {

            title:
                "Browse the Collection:",

            text:
                "Explore our collection and discover designs that match your style and preferences. Use the filters to narrow your options by theme, color, or card type."

        },


        {

            title:
                "Select a Design:",

            text:
                "Once you find a design you like, click on it to view more details. You can zoom in to examine the design closely and read the description to confirm it meets your requirements."

        },


        {

            title:
                "Add to Cart:",

            text:
                "Once you are happy with your design, select the quantity and click the \"Add to Cart\" button to continue."

        },


        {

            title:
                "Review Your Order:",

            text:
                "In your cart, review your order summary, including the quantity, price, and any additional services you selected."

        },


        {

            title:
                "Secure Payment:",

            text:
                "Wed Knot Craft offers a secure online payment system. Choose your preferred payment method and enter the required details to complete your transaction."

        },


        {

            title:
                "Place Your Order:",

            text:
                "After confirming your payment, you will receive an order confirmation email with your order details and an estimated delivery date."

        }

    ];


    function createHowOrderPage() {

        let howOrderView =
            document.getElementById(
                "howOrderView"
            );


        if (
            howOrderView
        ) {

            return howOrderView;

        }


        howOrderView =
            document.createElement(
                "section"
            );


        howOrderView.id =
            "howOrderView";


        howOrderView.className =
            "page-view how-order-page-view";


        const content =
            document.createElement(
                "div"
            );


        content.className =
            "how-order-content";


        const heading =
            document.createElement(
                "h1"
            );


        heading.textContent =
            "How do I order wedding cards from Wed Knot Craft online?";


        content.appendChild(
            heading
        );


        howOrderSteps.forEach(
            function (
                step
            ) {

                const paragraph =
                    document.createElement(
                        "p"
                    );


                const strong =
                    document.createElement(
                        "strong"
                    );


                strong.textContent =
                    step.title + " ";


                paragraph.appendChild(
                    strong
                );


                paragraph.appendChild(
                    document.createTextNode(
                        step.text
                    )
                );


                content.appendChild(
                    paragraph
                );

            }
        );


        howOrderView.appendChild(
            content
        );


        const footer =
            document.createElement(
                "footer"
            );


        footer.className =
            "wedding-footer how-order-footer";


        footer.innerHTML = `

            <div class="wedding-footer-inner">

                <div class="wedding-footer-brand">

                    <img
                        src="/media/images/plant_theme.png"
                        alt="Wed Knot Craft"
                    >

                    <h3>
                        Largest Wedding
                        <br>
                        Cards Collections in
                        <br>
                        Chennai
                    </h3>

                    <div class="social-row">

                        <span>
                            Follow us with
                        </span>

                        <span>◎</span>
                        <span>f</span>
                        <span>▶</span>
                        <span>◉</span>

                    </div>

                </div>


                <div class="wedding-footer-column">

                    <h3>
                        Information
                    </h3>

                    <a
                        href="#about"
                        class="how-about-link"
                    >
                        About Us
                    </a>

                    <a
                        href="#contact"
                        class="how-contact-link"
                    >
                        Contact Us
                    </a>

                    <a
                        href="#faq"
                    >
                        FAQ
                    </a>

                    <a
                        href="#how-order"
                        class="how-order-link"
                    >
                        How to order wedding invitation online?
                    </a>

                </div>


                <div class="wedding-footer-column">

                    <h3>
                        Quick Access
                    </h3>

                    <a href="#home">
                        Home
                    </a>

                    <a href="#wedding">
                        Wedding Cards
                    </a>

                    <a href="#wedding">
                        Hindu Wedding Cards
                    </a>

                </div>


                <div class="wedding-footer-column">

                    <h3>
                        Contact Us
                    </h3>

                    <p>
                        ☎ +91 9876543210
                    </p>

                    <p>
                        ✉ wedtype@weddingcards.com
                    </p>

                    <p>
                        Operating hours:
                        <br>
                        10.00Am to 10.00Pm
                    </p>

                    <strong>
                        Monday – Sunday
                    </strong>

                </div>

            </div>


            <div class="wedding-copyright">

                © Wed knot craft India Private Limited.
                All Rights Reserved.

            </div>

        `;


        howOrderView.appendChild(
            footer
        );


        const main =
            document.querySelector(
                "main"
            );


        if (
            main
        ) {

            main.appendChild(
                howOrderView
            );

        } else {

            document.body.appendChild(
                howOrderView
            );

        }


        return howOrderView;

    }


    function openHowOrderPage(
        event
    ) {

        event.preventDefault();

        event.stopPropagation();


        const howOrderView =
            createHowOrderPage();


        document
            .querySelectorAll(
                ".page-view"
            )
            .forEach(
                function (
                    view
                ) {

                    view.classList.remove(
                        "active-view"
                    );


                    view.style.display =
                        "none";

                }
            );


        howOrderView.classList.add(
            "active-view"
        );


        howOrderView.style.display =
            "block";


        closeCart();

        closeAllDropdowns();


        document
            .querySelectorAll(
                ".main-nav .nav-link"
            )
            .forEach(
                function (
                    link
                ) {

                    link.classList.remove(
                        "active"
                    );

                }
            );


        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }


    /* =====================================================
                  HOW TO ORDER CLICK
    ===================================================== */

    document.addEventListener(
        "click",
        function (
            event
        ) {

            const element =
                event.target.closest(
                    "a, p"
                );


            if (
                !element
            ) {

                return;

            }


            const text =
                (
                    element.textContent ||
                    ""
                )
                .replace(
                    /\s+/g,
                    " "
                )
                .trim()
                .toLowerCase();


            const href =
                (
                    element.getAttribute(
                        "href"
                    ) ||
                    ""
                )
                .trim()
                .toLowerCase();


            const isHowOrder =
                text ===
                    "how to order wedding invitation online?" ||
                href ===
                    "#how-order" ||
                element.classList.contains(
                    "how-order-link"
                );


            if (
                isHowOrder
            ) {

                openHowOrderPage(
                    event
                );

            }

        },
        true
    );


    /* =====================================================
                   HASH NAVIGATION HELPERS
    ===================================================== */

    document.addEventListener(
        "click",
        function (
            event
        ) {

            const link =
                event.target.closest(
                    "#howOrderView a"
                );


            if (
                !link
            ) {

                return;

            }


            const href =
                (
                    link.getAttribute(
                        "href"
                    ) ||
                    ""
                )
                .trim()
                .toLowerCase();


            if (
                href === "#home"
            ) {

                event.preventDefault();

                event.stopPropagation();


                showView(
                    "home"
                );

            }


            else if (
                href === "#wedding"
            ) {

                event.preventDefault();

                event.stopPropagation();


                showView(
                    "wedding"
                );

            }


            else if (
                href === "#about"
            ) {

                event.preventDefault();

                event.stopPropagation();


                showView(
                    "about"
                );

            }


            else if (
                href === "#contact"
            ) {

                event.preventDefault();

                event.stopPropagation();


                showView(
                    "contact"
                );

            }


            else if (
                href === "#faq"
            ) {

                openFaqPage(
                    event
                );

            }


            else if (
                href === "#how-order"
            ) {

                openHowOrderPage(
                    event
                );

            }

        },
        true
    );

});
/* =========================================================
                  HOW TO ORDER — FINAL FIX
========================================================= */

(function () {

    "use strict";


    /* =====================================================
                    HOW ORDER CONTENT
    ===================================================== */

    const howOrderSteps = [

        {
            title: "Browse the Collection:",
            text:
                "Take your time to explore our collection and discover various designs that suit your style and preferences. You can use the search filters to narrow down your options based on themes, colors, or card types."
        },

        {
            title: "Select a Design:",
            text:
                "Once you have found a design that catches your eye, click on it to view more details. You can zoom in to see the intricate details and read the card description to ensure it meets your requirements."
        },

        {
            title: "Add to Cart:",
            text:
                "Once you are happy with your design, select the quantity and click on the Add to Cart button to proceed to the next step."
        },

        {
            title: "Review Your Order:",
            text:
                "In the shopping cart, you will be able to review your order summary, including the quantity, price, and any additional services you have selected."
        },

        {
            title: "Secure Payment:",
            text:
                "King of Cards offers a secure online payment system. Choose your preferred payment method and enter the necessary details to complete your transaction."
        },

        {
            title: "Place Your Order:",
            text:
                "After confirming your payment, you will receive an order confirmation via email, along with an estimated delivery date."
        }

    ];


    /* =====================================================
                  CREATE ONLY ONE HOW ORDER PAGE
    ===================================================== */

    function getHowOrderView() {

        let page =
            document.getElementById(
                "howOrderView"
            );


        if (page) {
            return page;
        }


        page =
            document.createElement(
                "section"
            );


        page.id =
            "howOrderView";


        page.className =
            "page-view how-order-page-view";


        /* =================================================
                         CONTENT
        ================================================= */

        const content =
            document.createElement(
                "div"
            );


        content.className =
            "how-order-content";


        const heading =
            document.createElement(
                "h1"
            );


        heading.textContent =
            "How do I order wedding cards from Wed Knot Craft online?";


        content.appendChild(
            heading
        );


        howOrderSteps.forEach(
            function (step) {

                const paragraph =
                    document.createElement(
                        "p"
                    );


                const strong =
                    document.createElement(
                        "strong"
                    );


                strong.textContent =
                    step.title;


                paragraph.appendChild(
                    strong
                );


                paragraph.appendChild(
                    document.createTextNode(
                        " " + step.text
                    )
                );


                content.appendChild(
                    paragraph
                );

            }
        );


        page.appendChild(
            content
        );


        /* =================================================
                           FOOTER
        ================================================= */

        const footer =
            document.createElement(
                "footer"
            );


        footer.className =
            "wedding-footer how-order-footer";


        footer.innerHTML = `

            <div class="wedding-footer-inner">

                <div class="wedding-footer-brand">

                    <img
                        src="/media/images/plant_theme.png"
                        alt="Wed Knot Craft"
                    >

                    <h3>
                        Largest Wedding
                        <br>
                        Cards Collections in
                        <br>
                        Chennai
                    </h3>

                    <div class="social-row">

                        <span>
                            Follow us with
                        </span>

                        <span>◎</span>
                        <span>f</span>
                        <span>▶</span>
                        <span>◉</span>

                    </div>

                </div>


                <div class="wedding-footer-column">

                    <h3>
                        Information
                    </h3>

                    <a href="#about">
                        About Us
                    </a>

                    <a href="#contact">
                        Contact Us
                    </a>

                    <a href="#faq">
                        FAQ
                    </a>

                    <a href="#how-order">
                        How to order wedding
                        invitation online?
                    </a>

                </div>


                <div class="wedding-footer-column">

                    <h3>
                        Quick Access
                    </h3>

                    <a href="#home">
                        Home
                    </a>

                    <a href="#wedding">
                        Wedding Cards
                    </a>

                    <a href="#wedding">
                        Hindu Wedding Cards
                    </a>

                </div>


                <div class="wedding-footer-column">

                    <h3>
                        Contact Us
                    </h3>

                    <p>
                        ☎ +91 9876543210
                    </p>

                    <p>
                        ✉ wedtype@weddingcards.com
                    </p>

                    <p>
                        Operating hours:
                        10.00Am to 10.00Pm
                    </p>

                    <strong>
                        Monday – Sunday
                    </strong>

                </div>

            </div>


            <div class="wedding-copyright">

                © Wed knot craft India Private Limited.
                All Rights Reserved.

            </div>

        `;


        page.appendChild(
            footer
        );


        /*
            IMPORTANT:
            Add as a child of MAIN only once.
        */

        const main =
            document.querySelector(
                "main"
            );


        if (main) {

            main.appendChild(
                page
            );

        } else {

            document.body.appendChild(
                page
            );

        }


        return page;

    }


    /* =====================================================
                  HIDE EVERYTHING INSIDE MAIN
    ===================================================== */

    function hideAllMainViews() {

        const main =
            document.querySelector(
                "main"
            );


        if (!main) {
            return;
        }


        Array.from(
            main.children
        ).forEach(
            function (child) {

                child.style.display =
                    "none";

                child.classList.remove(
                    "active-view"
                );

            }
        );

    }


    /* =====================================================
                      OPEN HOW ORDER
    ===================================================== */

    function openHowOrder(
        event
    ) {

        if (event) {

            event.preventDefault();

            event.stopImmediatePropagation();

        }


        const page =
            getHowOrderView();


        /*
            THIS IS THE IMPORTANT FIX.

            Hide ALL existing main children,
            including Contact page and its footer.
        */

        hideAllMainViews();


        /*
            Show only How Order.
        */

        page.style.display =
            "block";


        page.classList.add(
            "active-view"
        );


        /*
            Close cart if available.
        */

        const cart =
            document.getElementById(
                "cartOverlay"
            );


        if (cart) {

            cart.classList.remove(
                "show"
            );

        }


        document.body.classList.remove(
            "modal-open"
        );


        /*
            Close every opened dropdown.
        */

        document
            .querySelectorAll(
                ".open"
            )
            .forEach(
                function (element) {

                    element.classList.remove(
                        "open"
                    );

                }
            );


        /*
            Remove active navigation.
        */

        document
            .querySelectorAll(
                ".main-nav .nav-link"
            )
            .forEach(
                function (link) {

                    link.classList.remove(
                        "active"
                    );

                }
            );


        /*
            Change URL.
        */

        history.replaceState(
            null,
            "",
            "#how-order"
        );


        /*
            Scroll to top.
        */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
                    FOOTER CLICK HANDLER
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const element =
                event.target.closest(
                    "a, p"
                );


            if (!element) {
                return;
            }


            const text =
                (
                    element.textContent ||
                    ""
                )
                .replace(
                    /\s+/g,
                    " "
                )
                .trim()
                .toLowerCase();


            const href =
                (
                    element.getAttribute(
                        "href"
                    ) ||
                    ""
                )
                .trim()
                .toLowerCase();


            const isHowOrder =
                href === "#how-order" ||
                text ===
                    "how to order wedding invitation online?";


            if (!isHowOrder) {
                return;
            }


            openHowOrder(
                event
            );

        },
        true
    );


})();