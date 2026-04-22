// ALLOC_SOURCE_OBJECT.js

window.ALLOC_SOURCE_OBJECT = {
  "tables": {
    "ALLOC_SOURCE_OBJECT": {
      "columns": {
        "ALLOC_SOURCE_OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ALLOC_SOURCE_OBJECT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID, E.g. ShipmentCost, VoucherCost, BillCost "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "CLASS_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Specific java class name that represents and performs operations for this object. "
        },
        "SOURCE_OBJECT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Identifies if the source object is of cost type or invemtory type or UOM type."
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
      "fk_tables": []
    }
  }
};
