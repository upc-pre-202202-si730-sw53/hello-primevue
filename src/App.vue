<script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
      value: '',
      numericValue: 0,
      anotherNumericValue: 0,
      someDateValue: '',
      items: [
        {
          label: 'Update', icon: 'pi pi-refresh', command: () => {
            alert('updated');
          }
        },
        {
          label: 'Delete', icon: 'pi pi-times', command: () => {
            alert('deleted');
          }
        },
      ],
      cars: [
        {brand: "Volkswagen", year: 2012, color: "Orange", vin: "dsad231ff"},
        {brand: "Audi", year: 2011, color: "Black", vin: "gwregre345"},
        {brand: "Renault", year: 2005, color: "Gray", vin: "h354htr"},
      ],
      checked: true

    }
  }
}
</script>

<template>
  <div class="grid">
    <div class="col">
      <div class="card">
      <div class="card-container blue-container">
        <span class="p-input-icon-left">
          <i class="pi pi-search"/>
          <pv-input-text
              type="text"
              v-model="value"
              placeholder="Search"/>
        </span>
        <span class="p-float-label">
          <pv-input-text
              id="input-text"
              type="text"
              v-model="text"/>
          <label for="input-text">Sample Text</label>
        </span>
        <span>
          <pv-input-mask v-model="value" mask="99/99/9999" slotChar="mm/dd/yyyy"/>
        </span>
        <span>
          <pv-input-number v-model="numericValue" mode="decimal" :minFractionDigits="2" :maxFractionDigits="2"/>
        </span>
        <span>
          <pv-input-number
            v-model="anotherNumericValue"
            showButtons
            buttonLayout="horizontal"
            decrementButtonClass="p-button-danger"
            incrementButtonClass="p-button-success"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"/>
        </span>
        <div>
          <pv-calendar
              v-model="someDateValue"
              selectionMode="range"/>
          <p>{{ someDateValue }}</p>
        </div>
        <pv-input-switch v-model="checked"/>
      </div>
      </div>
    </div>
    <div class="col">
      <pv-split-button
          label="Save"
          icon="pi pi-plus"
          :model="items"/>
    </div>
    <div class="col">
      <pv-data-table :value="cars">
        <template #header>
          <div>
            <pv-button icon="pi pi-refresh" style="float: left"/>
            List of cars
          </div>
        </template>
        <pv-column field="vin" header="Vin">
          <template #body="slotProps">
            <p>Vin {{ slotProps.data.vin }}</p>
          </template>
        </pv-column>
        <pv-column field="year" header="Year"/>
        <pv-column field="brand" header="Brand" :sortable="true"/>
        <pv-column field="color" header="Color"/>
      </pv-data-table>
    </div>
  </div>
</template>


