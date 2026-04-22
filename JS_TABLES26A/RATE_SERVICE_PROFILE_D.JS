// RATE_SERVICE_PROFILE_D.js

window.RATE_SERVICE_PROFILE_D = {
  "tables": {
    "RATE_SERVICE_PROFILE_D": {
      "description": "Groups together rate services.  Can be used if multiple delivery options might be OK.  Example: rate_service 1 = 'Overnight' rate_service 2 = 'Two-day'  We could create a profile called 'Under two days', and then associate each of the rate services with this profile within the RATE_SERVICE_PROFILE_D table.  The profile links to the OB_ORDER_BASE table.",
      "columns": {
        "RATE_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_SERVICE_PROFILE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_SERVICE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
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