// CONDITIONAL_BOOKING_PROFILE.js

window.CONDITIONAL_BOOKING_PROFILE = {
  "tables": {
    "CONDITIONAL_BOOKING_PROFILE": {
      "columns": {
        "CONDITIONAL_BOOKING_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CONDITIONAL_BOOKING_PROF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CONDITIONAL_BOOKING_PROF_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CB_ACCEPT_REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "CB_SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_SUPPORT_EQUIPMENT_MOD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
      "fk_tables": [
        "CONDITIONAL_BOOKING_PROF_D",
        "DOMAIN_SETTING",
        "SERVPROV_CB_PROFILE",
        "TENDER_COLLAB_CB_FIELD",
        "TRANSPORT_MODE"
]
    }
  }
};