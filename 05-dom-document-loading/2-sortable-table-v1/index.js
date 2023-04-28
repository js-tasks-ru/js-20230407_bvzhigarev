export default class SortableTable {
  constructor(headerConfig = [], data = []) {
    this.headerConfig = headerConfig;
    this.data = data; 
    
    //this.renderHeader();
    this.renderRow();
    this.renderHeader();
  }

  get templateHeader() {
    return `
      <div id="header" data-element="header" class="sortable-table__header sortable-table__row">
        <div class="sortable-table__cell" data-id="images" data-sortable="false" data-order="asc">
          <span>Image</span>
        </div>
        <div class="sortable-table__cell" data-id="title" data-sortable="true" data-order="asc">
          <span>Name</span>
          <span data-element="arrow" class="sortable-table__sort-arrow">
            <span class="sort-arrow"></span>
          </span>
        </div>
        <div class="sortable-table__cell" data-id="quantity" data-sortable="true" data-order="asc">
          <span>Quantity</span>
        </div>
        <div class="sortable-table__cell" data-id="price" data-sortable="true" data-order="asc">
          <span>Price</span>
        </div>
        <div class="sortable-table__cell" data-id="sales" data-sortable="true" data-order="asc">
          <span>Sales</span>
        </div>
      </div>
    `
  }

  get templateRow() {
    return `
    <a href="${this.link}" class="sortable-table__row">
      <div class="sortable-table__cell">
        <img class="sortable-table-image" alt="Image" src="${this.image}">
      </div>
      <div class="sortable-table__cell">${this.productName}</div>
      <div class="sortable-table__cell">${this.quantity}</div>
      <div class="sortable-table__cell">${this.price}</div>
      <div class="sortable-table__cell">${this.sales}</div>
    </a>
    `
  }

  renderHeader() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = this.templateHeader;
    this.element = wrapper.firstElementChild;
    document.getElementById('root').append(this.element);
  }

  renderRow() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = this.templateRow;
    this.element1 = wrapper.lastElementChild;

    for(let product of this.data) {
      this.element1.link = "dummy";
      this.image = product["images"][0];
      this.productName = product["title"];
      this.quantity = product["quantity"];
      this.price = product["price"];
      this.sales = product["sales"]

      document.getElementById('root').append(this.element1);
    }
  }

}