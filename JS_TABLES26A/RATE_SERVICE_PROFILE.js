// RATE_SERVICE_PROFILE.js

window.RATE_SERVICE_PROFILE = {
  "tables": {
    "RATE_SERVICE_PROFILE": {
      "description": "Valid list of values for names of service profiles.   The profile links rate services together in the RATE_SERVICE_PROFILE_D table.  This might be used if multiple delivery options are OK for an order (GC3 can decide which one is overall viable).  Example: rate_service 1 = 'Overnight' rate_service 2 = 'Two-day'  We could create a profile called 'Under two days', and then associate each of the rate services with this profile within the RATE_SERVICE_PROFILE_D table.  The profile links to the OB_ORDER_BASE table.",
      "columns": {
        "RATE_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_SERVICE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "IS_COMPATIBLE": {
          "type": "CHAR(1)",
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
      "fk_tables": [
        "LEG",
        "OB_LEG_CONSTRAINT",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "RATE_OFFERING",
        "RATE_SERVICE_PROFILE_D"
]
    }
  }
};