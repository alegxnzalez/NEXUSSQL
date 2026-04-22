// MODE_PROFILE.js

window.MODE_PROFILE = {
  "tables": {
    "MODE_PROFILE": {
      "columns": {
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A unique identifier to define the various modes in the system. For example Air, Truck ???? etc. The gid contains the domain portion. "
        },
        "MODE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Similar to the gid except for the domain portion. "
        },
        "MODE_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "A user defined name for the mode profile. "
        },
        "IS_COMPATIBLE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A true or false flag to identify whether the mode profile is compatible???"
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
        "ALLOCATION_RULE",
        "APPT_RULE_SET",
        "AUTO_APPROVE_RULE",
        "COMMODITY",
        "CONSTRAINT_SET",
        "EMISSION_RULE",
        "ESG_ACTIVITY_RULE",
        "GTM_COMPLIANCE_RULE",
        "GTM_DT_CONFIG_RULE",
        "LANE_CALENDAR",
        "LANE_SUMMARY",
        "LEG",
        "LINE_APPROVE_TOLERANCE",
        "LOCATION_CAPACITY_GROUP_D",
        "LOCATION_RESOURCE",
        "LOCATION_ROLE_PROFILE_CAL",
        "MODE_PROFILE_DETAIL",
        "NFRC_RULE",
        "OB_LEG_CONSTRAINT",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "P_SHIPMENT_SET",
        "SECONDARY_CHARGE_RULE",
        "SERVPROV",
        "SHIPPING_AGENT_CONTACT",
        "SHIPPING_AGENT_CONTACT_PROFIT",
        "SHIP_GROUP_RULE",
        "SPECIAL_SERVICE",
        "UNITIZATION_RULE"
      ]
    }
  }
};
