// GTM_TARIFF_COUNTRY.js

window.GTM_TARIFF_COUNTRY = {
  "tables": {
    "GTM_TARIFF_COUNTRY": {
      "description": "Captures the list of countries to be included or excluded in the rate calculation related to a tariff code.",
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
        "GTM_TARIFF_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TARIFF_CODE",
          "info": "Contains the unique identifier for the tariff code."
},
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Contains the country code id."
}
      },
      "fk_tables": []
    }
  }
};