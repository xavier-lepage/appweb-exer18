# Revue de code

## Informations générales
**Projet:** `appweb-trpr01` [Dépot GitHub](https://github.com/Jerjoker007/appweb-trpr01)

**Auteur:** Jérémie Paquin [Profil GitHub](https://github.com/Jerjoker007)

**Titre:** *Travail pratique 01 - Développement d'applications Web*

**Vérificateur:** Xavier Lepage [Profil GitHub](https://github.com/xavier-lepage)

# Revue de code détaillée

## Commentaires généraux
- Bonne structure du code.
- Certains éléments pourraient être plus facilement réutilisables.
- Certaines améliorations mineures à effectuer comme des balises inutile et des fautes de langue occasionelles.

## 1. `src/components/Header.vue`

### Commentaire de revue

**Xavier Lepage**
- L'en-tête est bien structurée et se limite à l'essentiel. Toutefois, la balise script est **inutile**, puisqu'elle est vide.


## 2. `src/components/Foter.vue`

### Commentaire de revue

**Xavier Lepage**
- Le pied de page est bien structuré et se limite à l'essentiel. Toutefois, la balise script est **inutile**, puisqu'elle est vide.


## 3. `src/components/ConfirmationMessage.vue`

### Extrait de code

```ts
watch(
  () => message.value,
  () => {
    setTimeout(() => {
      message.value = "";
    }, 3000);
  },
);
```

### Commentaire de revue

**Xavier Lepage**
- Le message de confirmation d'ajout de produit est assez simple.
- Malheureusement, `watch` de Vue est *moyennement* lisible.
- La balise style est vide et donc **inutile**.


## 4. `src/components/DeleteModal.vue`

### Extrait de code

```vue {2-2}
<div class="modal-body">
  Voulez-vous vraiment supprimé ce produit?
</div>
```

### Commentaire de revue

**Xavier Lepage**
- Bonne idée d'isoler le `modal` dans un composant. Toutefois, le rendre **indépendant de son contenu** serait intéressant.
- Le `body` du modal comporte une faute de *participe passé*:
	- Remplacer « supprimé » par « supprimer ».
- Le **nommage** des classes de *style* pourrait être plus clair.


## 5. `src/components/ErrorList.vue`

### Extrait de code

```vue
<template>
  <ul v-if="errors.length > 0" class="list-group mb-3">
    <li v-for="error in errors" class="list-group-item list-group-item-danger">
      {{ error }}
    </li>
  </ul>
</template>
```

### Commentaire de revue

**Xavier Lepage**
- La liste d'erreurs est **très simple** et **facile à lire**.
- Elle se limite à l'essentiel, il n'y a pas de code ou de balises inutiles.


## 6. `src/components/ExportDataButton.vue`

### Extraits de code

```vue {23-23}
<script setup lang="ts">
import type { Product } from "../script/type";
import { exportToCSV } from "../services/ExportsCsv";

const props = defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="d-flex justify-content-end mt-3">
    <button
      type="button"
      class="btn btn-primary"
      @click="exportToCSV(products)"
      :disabled="products.length === 0"
    >
      Exporter en CSV
    </button>
  </div>
</template>

<style></style>
```

### Commentaire de revue

**Xavier Lepage**
- La balise `<style>` n'est pas nécessaire.
- Le bouton **ne devrait pas** avoir à manipuler la liste de produits.
- Le bouton pourrait simplement **émettre** un événement de *clic* pour éviter sa dépendance envers la méthode d'exportation.
- Encore mieux, il pourrait plutôt y avoir un composant de bouton personnalisé pour faciliter la **réutilisation**.


## 7. `src/components/FilterProductInput.vue`

### Extraits de code

```vue {16-16}
<script setup lang="ts">
const filterInput = defineModel("filterInput");
</script>

<template>
  <div class="d-flex justify-content-end">
    <input
      type="text"
      placeholder="Filtre"
      v-model="filterInput"
      class="form-control w-25"
    />
  </div>
</template>

<style></style>
```

### Commentaire de revue

**Xavier Lepage**
- Pour quelqu'un qui n'est pas familier avec le projet, il n'est pas immédiatement clair qu'il s'agit d'une barre de recherche pour filtrer les résultats.
- Le code est simple, mais la balise `<style>` pourrait être retirée.


## 8. `src/components/InventoryManager.vue`

### Extraits de code

```vue
<style scoped></style>
```

### Commentaire de revue

**Xavier Lepage**
- La balise `<style>` pourrait être omise.
- Le composant contient beaucoup de logique.


## 9. `src/components/ProductDetails.vue`

### Extraits de code

```vue
<style></style>
```

### Commentaire de revue

**Xavier Lepage**
- Le composant gère bien ses responsabilités.
- Toutefois, la balise `<style>` pourrait être omise.


## 10. `src/components/ProductForm.vue`

### Extraits de code

```vue
<style></style>
```

### Commentaire de revue

**Xavier Lepage**
- Le composant contient beaucoup de logique
- Toutefois, la balise `<style>` pourrait être omise.


## 11. `src/components/ProductItem.vue`

### Extraits de code

```vue
<style></style>
```

### Commentaire de revue

**Xavier Lepage**
- Le composant est assez simple et gère bien ses responsabilités.
- Toutefois, la balise `<style>` pourrait être omise.


## 12. `src/components/ProductList.vue`

### Extraits de code

```vue
<style></style>
```

### Commentaire de revue

**Xavier Lepage**
- Le composant est assez simple et gère bien ses responsabilités.
- Le composant est facile à lire.
- Toutefois, la balise `<style>` pourrait être omise.