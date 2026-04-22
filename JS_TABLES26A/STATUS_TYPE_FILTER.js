// STATUS_TYPE_FILTER.js

window.STATUS_TYPE_FILTER = {
  "tables": {
    "STATUS_TYPE_FILTER": {
      "description": "This table defines a user-defined filter for status types that is applied to a specific object type (business object)",
      "columns": {
        "STATUS_TYPE_FILTER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "STATUS_TYPE_FILTER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "OBJECT_TYPE": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "Business object type"
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
        "STATUS_TYPE_FILTER_ACCESS",
        "STATUS_TYPE_FILTER_D"
]
    }
  }
};