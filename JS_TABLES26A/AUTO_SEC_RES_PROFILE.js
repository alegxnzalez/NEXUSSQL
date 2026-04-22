// AUTO_SEC_RES_PROFILE.js

window.AUTO_SEC_RES_PROFILE = {
  "tables": {
    "AUTO_SEC_RES_PROFILE": {
      "columns": {
        "AUTO_SEC_RES_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "AUTO_SEC_RES_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION"
},
        "SAVED_CONDITION_OVERRIDE_CRIT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "MUST_MEET_ALL_CRITERIA": {
          "type": "VARCHAR2(1)",
          "nullable": true,
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
        "AUTO_SEC_RES_PROFILE_D",
        "AUTO_SEC_RES_PROFILE_LANE_JOIN"
]
    }
  }
};