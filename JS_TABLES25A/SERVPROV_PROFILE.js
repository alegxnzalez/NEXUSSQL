// SERVPROV_PROFILE.js

window.SERVPROV_PROFILE = {
  "tables": {
    "SERVPROV_PROFILE": {
      "columns": {
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A unique identifier to define the group profile for multiple service providers. The gid contains the domain name. "
        },
        "SERVPROV_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Similar to the gid except for the domain name. "
        },
        "SERVPROV_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "A user defined profile (group) name. "
        },
        "IS_COMPATIBLE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A true or false indicator that identifies whether the service providers are compatible between the groups. This is used when planning the shipments."
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
        "ACTIVITY_TIME_DEF",
        "APPT_RULE_SET",
        "CONSTRAINT_SET",
        "LANE_SUMMARY",
        "LEG",
        "LOCATION",
        "LOCATION_CAPACITY_GROUP_D",
        "LOCATION_RESOURCE",
        "MATCH_VALIDATION_RULE",
        "NFRC_RULE",
        "OB_LEG_CONSTRAINT",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "P_RULE_EXCLUDE_PACKAGE",
        "P_RULE_FAVOR_CARRIER",
        "P_RULE_LIMIT_AWARD",
        "P_SHIPMENT_SET",
        "RATE_GEO",
        "SERVPROV_PROFILE_DETAIL",
        "VOYAGE"
      ]
    }
  }
};
