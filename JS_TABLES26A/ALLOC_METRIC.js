// ALLOC_METRIC.js

window.ALLOC_METRIC = {
  "tables": {
    "ALLOC_METRIC": {
      "columns": {
        "ALLOC_METRIC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "ALLOCATION_BASIS": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOC_TARGET"
},
        "ALLOC_METRIC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "CLASS_NAME": {
          "type": "VARCHAR2(255)",
          "nullable": false
},
        "SINGLE_ORIGIN_ONLY": {
          "type": "CHAR(1)",
          "nullable": false
},
        "SINGLE_DESTINATION_ONLY": {
          "type": "CHAR(1)",
          "nullable": false
},
        "SINGLE_ORDER_ONLY": {
          "type": "CHAR(1)",
          "nullable": false
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "ALLOC_METHOD_DETAIL"
]
    }
  }
};