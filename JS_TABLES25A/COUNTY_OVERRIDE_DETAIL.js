// COUNTY_OVERRIDE_DETAIL.js

window.COUNTY_OVERRIDE_DETAIL = {
  "tables": {
    "COUNTY_OVERRIDE_DETAIL": {
      "columns": {
        "COUNTY_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COUNTY_OVERRIDE"
        },
        "SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number with county_override_gid will be the primary key of this table. "
        },
        "OTM_COUNTY": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "County from the OTM location table "
        },
        "EDE_COUNTY": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Translated county used to pass to external distance engines "
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COUNTRY_CODE",
          "info": "country code from the Country table "
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Province code/state from the location table"
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
