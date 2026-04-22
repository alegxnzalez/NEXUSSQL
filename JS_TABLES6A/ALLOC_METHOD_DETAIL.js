// ALLOC_METHOD_DETAIL.js

window.ALLOC_METHOD_DETAIL = {
  "tables": {
    "ALLOC_METHOD_DETAIL": {
      "columns": {
        "ALLOC_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOC_METHOD",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ALLOC_METRIC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOC_METRIC",
          "info": "The metric by which we want to perform the allocation "
        },
        "PERCENTAGE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The weightage given to the metric in performing the allocation "
        },
        "ALLOC_TARGET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOC_METRIC",
          "info": "Identifies to which allocation target object this metric and method corresponds to, as not all metrics can be given for all of the allocation target objects."
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
      "fk_tables": []
    }
  }
};
