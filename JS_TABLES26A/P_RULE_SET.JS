// P_RULE_SET.js

window.P_RULE_SET = {
  "tables": {
    "P_RULE_SET": {
      "description": "Base table for Sourcing Rule Manager",
      "columns": {
        "P_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "P_RULE_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LOCAL_MIN_SERVPROV_LIMIT": {
          "type": "NUMBER",
          "nullable": true
},
        "GLOBAL_MIN_SERVPROV_LIMIT": {
          "type": "NUMBER",
          "nullable": true
},
        "LOCAL_MAX_SERVPROV_LIMIT": {
          "type": "NUMBER",
          "nullable": true
},
        "GLOBAL_MAX_SERVPROV_LIMIT": {
          "type": "NUMBER",
          "nullable": true
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
        "P_LANE_ATTRIBUTES",
        "P_RULE_EXCLUDE_PACKAGE",
        "P_RULE_EXCL_BY_ATTRIB",
        "P_RULE_FAVOR_BY_ATTRIB",
        "P_RULE_FAVOR_CARRIER",
        "P_RULE_LIMIT_AWARD",
        "P_RULE_WIN_CARRIER_LIMIT",
        "P_SOLUTION",
        "RATE_ZONE_PROFILE",
        "X_LANE"
]
    }
  }
};