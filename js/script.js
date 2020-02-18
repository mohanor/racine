const main = document.getElementById('main');
const insc = document.getElementById('insc');
const item = document.getElementsByClassName('item');
const childList = document.getElementsByClassName('childList');
insc.onclick = function () {
    const inscContent = `
            <div>
                <form method="post" action="#" class="form">
                    <table>
                        <strong>Inscription</strong>
                        <tr>
                            <td class="first">Nom</td>
                            <td class="second"><input type="text" placeholder="Tapez votre nom"> *</td>
                        </tr>
                        <tr>
                            <td class="first">Prenom</td>
                            <td class="second"><input type="text"> *</td>
                        </tr>
                        <tr>
                            <td class="first">Date de naissance</td>
                            <td class="second"><input type="date"> *</td>
                        </tr>
                        <tr>
                            <td class="first">Mot de passe</td>
                            <td class="second"><input type="password"> *</td>
                        </tr>
                        <tr>
                            <td class="first">Confirmez mot de passe</td>
                            <td class="second"><input type="password"> *</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="second">
                                <input type="submit" value="Valider" class="btn">
                                <input type="reset" value="Annuler" class="btn">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
    `;
    main.innerHTML = inscContent;
}

item[0].addEventListener('click', () => {
    if (childList[0].style.height == "0px") {
        childList[0].style.height = "168px";
        childList[1].style.height = 0;
    } else {
        childList[0].style.height = 0;
    }
});

item[1].onclick = function () {
    if (childList[1].style.height == "0px") {
        childList[1].style.height = "127px";
        childList[0].style.height = 0;
    } else {
        childList[1].style.height = 0;
    }
}