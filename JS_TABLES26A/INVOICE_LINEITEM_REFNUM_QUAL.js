// INVOICE_LINEITEM_REFNUM_QUAL.js

window.INVOICE_LINEITEM_REFNUM_QUAL = {
  "tables": {
    "INVOICE_LINEITEM_REFNUM_QUAL": {
      "description": "Contains the qualifier and description of additional information that is associated with an invoice line item.  The actual values would then be stored in INVOICE_LINEITEM_REFNUM.",
      "columns": {
        "INVOICE_LI_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "INVOICE_LI_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "INVOICE_LI_REFNUM_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "INVOICE_LI_REFNUM_DESC contains a textual description for the line item reference number on the invoice."
},
        "DEFAULT_REFNUM_BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE",
          "info": "The BN type used to generate a refnum when the refnum field for a record in the corresponding refnum table is not populated."
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
}
      },
      "fk_tables": [
        "INVOICE_LINEITEM_REFNUM"
]
    }
  }
};