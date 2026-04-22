// VAT_PROVINCIAL_REGISTRATION.js

window.VAT_PROVINCIAL_REGISTRATION = {
  "tables": {
    "VAT_PROVINCIAL_REGISTRATION": {
      "columns": {
        "VAT_PROVINCIAL_REG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The provincial VAT registration ID. "
        },
        "VAT_PROVINCIAL_REG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the provincial VAT registration. "
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COUNTRY_CODE",
          "info": "The country code for the provincial VAT registration. "
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": false,
          "info": "The province code of the registration. "
        },
        "CORPORATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CORPORATION",
          "info": "The corporation that this registration ID belongs to. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": [
        "INV_SUPPLY_PROVINCE_VAT_REG"
      ]
    }
  }
};
