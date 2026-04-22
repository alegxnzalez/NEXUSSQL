// PROVINCE_CODE_PROFILE_D.js

window.PROVINCE_CODE_PROFILE_D = {
  "tables": {
    "PROVINCE_CODE_PROFILE_D": {
      "columns": {
        "PROVINCE_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PROVINCE_CODE_PROFILE",
          "info": "Gid to identify the province code profile the province code is a member of "
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": false,
          "key_value": true,
          "info": "Province code that is a member of the identified province code profile "
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Country code that this povince belongs to"
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
