/*document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        if (name.value === '' || email.value === '') {
            alert('Sva polja su obavezna');
            e.preventDefault();
        }
    });
});*/


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const zaglavljestr = document.getElementById('zaglavljestr');
    const closeBtn = document.getElementById('zatvori-hamburger');

    hamburger.addEventListener('click', () => {
        if (zaglavljestr.style.width === '250px') {
            zaglavljestr.style.width = '0';
        } else {
            zaglavljestr.style.width = '250px';
        }
    });

    closeBtn.addEventListener('click', () => {
        zaglavljestr.style.width = '0';
    });

    const sidebarLinks = document.querySelectorAll('#zaglavljestr ul li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.style.width = '0';
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let hero = document.getElementById('hero');
    let slides = document.querySelectorAll('.img-blok img');
    let currentIndex = 0;

    function showNextSlide() {
        let nextIndex = (currentIndex + 1) % slides.length;
        hero.style.backgroundImage = `url(${slides[nextIndex].src})`;
        currentIndex = nextIndex;
    }

    hero.style.backgroundImage = `url(${slides[0].src})`;
    setInterval(showNextSlide, 5000); // Change image every 5 seconds
});
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelectorAll('.product-grid img');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductPrice = document.getElementById('modal-product-price');
    const modalProductDescription = document.getElementById('modal-product-description');
    const addToCartModal = document.getElementById('add-to-cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalAmount = 0;

    productGrid.forEach(img => {
        img.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-name');
            const productPrice = e.target.getAttribute('data-price');
            const productDescription = e.target.getAttribute('data-description');
            const isWorkshop = e.target.getAttribute('data-workshop') === 'true';
            
            //var DateSelected = document.getElementById('calendar').value;

            modalProductName.textContent = productName;
            modalProductPrice.textContent = `Cena: ${productPrice} RSD`;
            modalProductDescription.textContent = productDescription;

           if(productName == 'Dvorac'){
            document.getElementById('kalendar').style.display = 'none';
           }
           else if(productName == 'Devojka u prirodi'){
            document.getElementById('kalendar').style.display = 'none';
           }
           else if(productName == 'Rođenje Venere'){
            document.getElementById('kalendar').style.display = 'none';
           }
           else if(productName == 'Skulptura sa pticom'){
            document.getElementById('kalendar').style.display = 'none';
           }
           else if(productName == 'Skulptura čoveka'){
            document.getElementById('kalendar').style.display = 'none';
           }
           else if(productName == 'Skulptura sa mačkom'){
            document.getElementById('kalendar').style.display = 'none';
           }

            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        document.getElementById('kalendar').style.display = '';
        modal.style.display = 'none';
        document.getElementById('workshop-details').style.display = 'none';
        document.getElementById('workshop-info').style.display = 'none';
        
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
           modal.style.display = 'none';
            document.getElementById('workshop-details').style.display = 'none';
            document.getElementById('workshop-info').style.display = 'none';
            document.getElementById('kalendar').style.display = '';
        }
    });

    addToCartModal.addEventListener('click', () => {
        const productName = modalProductName.textContent;
        const productPrice = parseInt(modalProductPrice.textContent.replace('Cena: ', '').replace(' RSD', ''), 10);
        var datum = document.getElementById('kalendar').value;

        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - ${productPrice} RSD | Datum: ${datum}`;
        cartItemsList.appendChild(cartItem);

        totalAmount += productPrice;
        totalPriceElement.textContent = `Ukupan iznos: ${totalAmount} RSD`;

        if(productName == 'Slikarska radionica'){
            document.getElementById('Rezervacija').style.display = '';
        }
        else if(productName == 'Keramička radionica'){
            document.getElementById('Rezervacija').style.display = '';
        }
        else if(productName == 'Druženje u kafiću'){
            document.getElementById('Rezervacija').style.display = '';
        }

        modal.style.display = 'none';
    });

    /*potvrda.addEventListener('click', () => {
        
        alert('Uspešno ste potvrdili rezervaciju!');
        
    });*/
});

function popupFN(){
    document.getElementById('popup1').style.display = 'block';
};

function closeFN() {
    document.getElementById('popup1').style.display = 'none';
    document.getElementById('prozorKontakt').style.display = 'none';
    document.getElementById('prozorProdaja').style.display = 'none';
};

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup1')) {
        document.getElementById('popup1').style.display = '';
    }
});

function OtvoriKontakt(){
    document.getElementById('prozorKontakt').style.display = 'block';
};

function SaznajVise(){
    document.getElementById('prozorProdaja').style.display = 'block';
};
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('tema');
    const fontToggle = document.getElementById('font');

    // Učitaj preferenciju korisnika iz kolačića
    const userTheme = getCookie('theme') || 'light';

    if (userTheme === 'gray') {
        document.body.classList.add('gray-theme');
    }

    // Prebaci temu kada se klikne na dugme
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('gray-theme');
        const theme = document.body.classList.contains('gray-theme') ? 'gray' : 'light';
        setCookie('theme', theme, 365);
    });
     // Prebaci veličinu fonta kada se klikne na dugme
     fontToggle.addEventListener('click', () => {
        if (document.body.classList.contains('large-font')) {
            document.body.classList.remove('large-font');
            document.body.classList.add('small-font');
            setCookie('fontSize', 'small', 365);
        } else if (document.body.classList.contains('small-font')) {
            document.body.classList.remove('small-font');
            setCookie('fontSize', 'normal', 365);
        } else {
            document.body.classList.add('large-font');
            setCookie('fontSize', 'large', 365);
        }
    });
});

// Funkcija za postavljanje kolačića
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Funkcija za dobijanje kolačića
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}
document.addEventListener('DOMContentLoaded', () => {
    // Validacija kontakt forme
    const kontaktForma = document.getElementById('kontakt-forma');
    if (kontaktForma) {
        kontaktForma.addEventListener('submit', (e) => {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            if (!name.value || !email.value || !message.value) {
                alert('Sva polja su obavezna');
                e.preventDefault();
            }
        });
    }

    // Validacija rezervacije
    const rezervacijaForma = document.getElementById('Rezervacija');
    if (rezervacijaForma) {
        const rezervacijaButton = document.getElementById('potvrda');
        rezervacijaButton.addEventListener('click', (e) => {
            const ime = document.getElementById('Ime');
            const prezime = document.getElementById('Prezime');
            const email = document.getElementById('Email1');
            if (!ime.value || !prezime.value || !email.value) {
                alert('Sva polja su obavezna');
                e.preventDefault();
            }
            else
            {
                alert('Uspešna rezervacija!');
            }
        });
    }

    // Validacija prijave za ulogu
    const validirajUlogu = () => {
        const imeUloga = document.getElementById('ImeUloga');
        const prezimeUloga = document.getElementById('PrezimeUloga');
        const porukaUloga = document.getElementById('PorukaUloga');
        if (!imeUloga.value || !prezimeUloga.value || !porukaUloga.value) {
            alert('Sva polja su obavezna');
            return false;
        } else {
            alert('Uspešno ste poslali prijavu!');
            closeFN();
            return true;
        }
    };
    window.validirajUlogu = validirajUlogu;
});


