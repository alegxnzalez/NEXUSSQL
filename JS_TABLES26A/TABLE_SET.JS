// TABLE_SET.js

window.TABLE_SET = {
  "tables": {
    "TABLE_SET": {
      "description": "This is an internal GC3 table. It groups all the GC3 tables in to logical functioning areas. For e.g., Shipment, Order, Location etc.",
      "columns": {
        "TABLE_SET": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true
}
      },
      "fk_tables": [
        "DOMAIN_GRANTS_MADE",
        "TABLE_SET_DETAIL"
]
    }
  }
};