// HAZMAT_APPROVAL_EXEMPTION.js

window.HAZMAT_APPROVAL_EXEMPTION = {
  "tables": {
    "HAZMAT_APPROVAL_EXEMPTION": {
      "columns": {
        "HAZMAT_APPROVAL_EXEMPTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "HAZMAT_APPROVAL_EXEMPTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "This is the description of the hazmat approval exemption code."
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
        "HAZMAT_ITEM",
        "ORDER_RELEASE_LINE"
]
    }
  }
};