# Revue de code

## Informations générales

- **Projet** : `appweb-trpr01` [Lien](https://github.com/xavier-lepage/appweb-trpr01)
- **Auteur** : `Xavier Lepage` [Github](https://github.com/xavier-lepage)
- **Titre** : *Travail pratique 01 - Développement d'applications Web*
- **Vérificateur**: `Jérémie Paquin`

---

# Revue de code détaillée

## 1. `src/components/ProductForm/ProductForm.vue`

### Extrait de code

```ts {4-9}
function handleFormSubmission(): void {
  if (validateForm()) {
    switch (props.currentAction) {
      case ProductAction.ADD:
        emit("addProduct", createProduct(), props.currentAction);
        break;
      case ProductAction.CLONE:
        emit("addProduct", createProduct(), props.currentAction);
        break;
      case ProductAction.EDIT:
        emit("editProduct", createProduct());
        break;
    }
    resetForm();
  }
}
```

### Commentaire de revue

**Jérémie Paquin**

> Ingénieuse utilisation d'un switch case, mais tu aurais pu enlever les cas de copie et d'ajout pour le mettre dans un cas défaut.

## 2. `src/components/MainMenu.vue`

### Extrait de code

```vue
<div ref="productDelete" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
	    <div class="modal-content">
		    <div class="modal-header">
				<h1 class="modal-title fs-5">Supprimer le produit?</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				Le produit sélectionné sera définitivement supprimé.
			</div>
			<div class="modal-footer">
				<ActionButton
					:label="'Annuler'"
					:priority="Priority.SECONDARY"
					data-bs-dismiss="modal">
				</ActionButton>
				<ActionButton
					@click="deleteProduct"
					:label="'Supprimer'"
					:priority="Priority.DANGER"
					data-bs-dismiss="modal">
				</ActionButton>
			</div>
		</div>
	</div>
</div>
```

### Commentaire de revue

**Jérémie Paquin**

> Le modal dans le MainMenu aurais pu être un component séparé pour une meilleur séparation.

## 3. `src/components/StockAlert.vue`

### Extrait de code

```ts
const isShown = ref<boolean>(true);

function dismiss(): void {
  isShown.value = false;
}
```

### Commentaire de revue

**Jérémie Paquin**

> Laisser l'option de rejeter l'alerte est une bonne touche. Il peut être un peu redondant de rejeter tous les produits un par un.

## 4. `src/components/ProductList/SearchBar.vue`

### Extrait de code

```ts
watch(
  () => query.value,
  (query) => {
    emit("updateSearch", query.toLowerCase());
  },
  { immediate: true },
);
```

### Commentaire de revue

**Jérémie Paquin**

> Ceci aurait pu être un simple defineModel avec une ref et un computed de l'autre bord.

---

## Commentaire final

- Projet bien décortiquer en plusieurs components où chacun sert précisement à une tâche.
- Bonne utilisation de fichiers typescript pour aléger les components.
- Le nommage des variables et fonctions sont claires et précises.