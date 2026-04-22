// GTM_TA_MEMBER.js

window.GTM_TA_MEMBER = {
  "tables": {
    "GTM_TA_MEMBER": {
      "description": "This table contains information of Trade Agreement Members (Nations or Unions).",
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
        "GTM_TRADE_AGREEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRADE_AGREEMENT",
          "info": "Specifies the unique identifier across all domains for the GTM Trade Agreement."
},
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REGION",
          "info": "Region ID for Trade Agreement Member."
}
      },
      "fk_tables": []
    }
  }
};