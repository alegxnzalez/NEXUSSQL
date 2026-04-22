// GEO_POSTAL_POINT.js

window.GEO_POSTAL_POINT = {
  "tables": {
    "GEO_POSTAL_POINT": {
      "columns": {
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        },
        "POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "key_value": true
        },
        "LAT": {
          "type": "NUMBER(10,5)",
          "nullable": false
        },
        "LON": {
          "type": "NUMBER(10,5)",
          "nullable": false
        },
        "ACCURACY": {
          "type": "NUMBER(7,2)",
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
        }
      },
      "fk_tables": []
    }
  }
};
