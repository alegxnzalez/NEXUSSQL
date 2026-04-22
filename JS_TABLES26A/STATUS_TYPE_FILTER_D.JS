// STATUS_TYPE_FILTER_D.js

window.STATUS_TYPE_FILTER_D = {
  "tables": {
    "STATUS_TYPE_FILTER_D": {
      "description": "This table is the detail table for STATUS_TYPE_FILTER.  It contains the status types that belong to the filter.",
      "columns": {
        "STATUS_TYPE_FILTER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STATUS_TYPE_FILTER",
          "info": "Contains the unique identifier for the status type filter"
},
        "STATUS_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "Status Type XID"
},
        "DISPLAY_SEQUENCE": {
          "type": "NUMBER(2)",
          "nullable": false,
          "info": "The order in which the status will be displayed."
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