// TIME_ZONE_LOCALE.js

window.TIME_ZONE_LOCALE = {
  "tables": {
    "TIME_ZONE_LOCALE": {
      "columns": {
        "TIME_ZONE_LOCALE_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TIME_ZONE",
          "info": "TIME_ZONE_GID contains the unique identifier for the time zone for localization. "
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COUNTRY_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "PROVINCE": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "POSTAL_CODE_LOW": {
          "type": "VARCHAR2(15)",
          "nullable": true
        },
        "POSTAL_CODE_HIGH": {
          "type": "VARCHAR2(15)",
          "nullable": true
        },
        "CITY": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "CITY contains the name of the city for the time zone."
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
