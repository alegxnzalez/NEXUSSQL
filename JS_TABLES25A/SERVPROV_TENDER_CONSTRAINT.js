// SERVPROV_TENDER_CONSTRAINT.js

window.SERVPROV_TENDER_CONSTRAINT = {
  "tables": {
    "SERVPROV_TENDER_CONSTRAINT": {
      "columns": {
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
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV",
          "info": "Service Provider for which this tender constraint applies "
        },
        "SERVPROV_TENDER_CONSTR_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number for primary key "
        },
        "ORIGIN_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Origin Country Code tender constraint "
        },
        "DEST_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Destination Country Code tender constraint"
        }
      },
      "fk_tables": []
    }
  }
};
