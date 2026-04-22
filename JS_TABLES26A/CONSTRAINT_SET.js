// CONSTRAINT_SET.js

window.CONSTRAINT_SET = {
  "tables": {
    "CONSTRAINT_SET": {
      "description": "Defines a set of constraints on a procurement solution in terms of which types of equipment can be used, which carriers, and which transport modes.",
      "columns": {
        "CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CONSTRAINT_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ABS_MIN_CARRIER_PERF_LEVEL": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Bid is rejected if carrier's performance level is below this"
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "Bid is rejected if carrier bids an equipment group that inappropriate for the project, bid round, or lane"
},
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "Bid is rejected if carrier is excluded from the project, bid round, or lane"
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "Bid is rejected if carrier's mode is inappropriate for the project, bid round, or lane"
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
        "P_BID_ROUND",
        "P_PROJECT",
        "X_LANE"
]
    }
  }
};