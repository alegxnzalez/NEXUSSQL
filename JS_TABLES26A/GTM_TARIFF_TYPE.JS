// GTM_TARIFF_TYPE.js

window.GTM_TARIFF_TYPE = {
  "tables": {
    "GTM_TARIFF_TYPE": {
      "description": "This table contains Tariff Type details.",
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
        "GTM_TARIFF_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Specifies the unique identifier across all domains for GTM Tariff Type."
},
        "GTM_TARIFF_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Specifies the unique identifier in a particular domain for GTM Tariff Type."
},
        "TARIFF_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "Name of the Tariff Type."
},
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "External code for Tariff Type."
}
      },
      "fk_tables": [
        "GTM_TARIFF_CODE"
]
    }
  }
};