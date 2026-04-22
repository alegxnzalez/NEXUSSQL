// INVOICE_ROUTE_BOV.js

window.INVOICE_ROUTE_BOV = {
  "tables": {
    "INVOICE_ROUTE_BOV": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "ROUTE_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "TRANSPORT_MODE_IDENTIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "INTERMODAL_SERVICE_CODE": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "JCT_CITY_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        }
      },
      "fk_tables": []
    }
  }
};
