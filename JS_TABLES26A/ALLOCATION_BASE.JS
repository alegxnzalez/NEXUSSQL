// ALLOCATION_BASE.js

window.ALLOCATION_BASE = {
  "tables": {
    "ALLOCATION_BASE": {
      "columns": {
        "ALLOC_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "ALLOC_TYPE_QUAL_GID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "foreign_key": "ALLOC_TYPE_QUAL",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOICE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "TIMESTAMP": {
          "type": "DATE",
          "nullable": false
},
        "ALLOCATED_COST": {
          "type": "NUMBER",
          "nullable": true
},
        "ALLOCATED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "ALLOCATED_COST_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "ALLOCATED_COST in base units."
},
        "PARENT_INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOICE",
          "info": "If populated, the INVOICE_GID indicates that this alllocation is for a child invoice.  This column indicates the parent invoice of the entire consolidation that was allocated."
},
        "VOUCHER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VOUCHER",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE"
},
        "ALLOCATED_COST_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "functional currency amount for allocated_cost"
},
        "ALLOCATED_COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "SHIP_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_GROUP",
          "info": "Represents Shipment Group ID. This is populated when allocating a shipment group or a voucher corresponding to an invoice created for a shipment group."
}
      },
      "fk_tables": [
        "ALLOCATION",
        "ALLOCATION_D",
        "ALLOCATION_OB_LINE",
        "ALLOCATION_OB_LINE_D",
        "ALLOCATION_ORDER_RELEASE_D",
        "ALLOCATION_OR_LINE_D"
]
    }
  }
};