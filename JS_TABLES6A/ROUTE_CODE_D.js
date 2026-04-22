// ROUTE_CODE_D.js

window.ROUTE_CODE_D = {
  "tables": {
    "ROUTE_CODE_D": {
      "columns": {
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        },
        "SEQ_NO": {
          "type": "NUMBER(2)",
          "nullable": false,
          "key_value": true
        },
        "CARRIER_SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC"
        },
        "SEQUENCE_CODE": {
          "type": "VARCHAR2(2)",
          "nullable": false
        },
        "RAIL_JUNCTION_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JUNCTION_CODE"
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
