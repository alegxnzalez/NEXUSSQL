// REGION.js

window.REGION = {
  "tables": {
    "REGION": {
      "columns": {
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "REGION_GID contains the unique identifier for the region for the lane. "
        },
        "REGION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "REGION_XID contains the unique external identifier for the region for the lane. "
        },
        "REGION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "REGION_NAME contains the name for the lane's region. "
        },
        "LOADED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N",
            "E"
          ]
        },
        "REPRESENTATIVE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Location that can be used to stand in for the region when location data is needed."
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
        "APPT_RULE_SET",
        "CM_ENDING_EXCLUSION_REGION",
        "CR_FORECAST",
        "CR_LV_AGGREGATE",
        "CR_ROUTE_LEG",
        "DM_RULE",
        "DRIVER",
        "DRIVER_LOCATION_PREFERENCE_D",
        "EMISSION_RULE",
        "ESG_ACTIVITY_RULE",
        "GTM_COMPLIANCE_RULE_REGION",
        "GTM_JURISDICTION",
        "GTM_LICENSE_REGION",
        "GTM_PROD_CLASS_TYPE",
        "GTM_RULES_OF_ORIGIN",
        "GTM_TA_MEMBER",
        "GTM_TA_PARTNER",
        "HAZMAT_ITEM",
        "HNAME_SET",
        "LANE_SUMMARY_STAT",
        "LEG",
        "LOCATION",
        "LOC_ROLE_PROFILE_HANDLING",
        "NFRC_RULE",
        "OPERATIONAL_LOCATION_D",
        "P_BID",
        "P_SHIPMENT_ARB_LANE",
        "P_SHIPMENT_SET",
        "REGION_DETAIL",
        "REGION_GROUP_D",
        "ROUTE_INSTANCE_LEG",
        "ROUTE_TEMPLATE_LEG",
        "RO_LANE_SPECIAL_SERVICE",
        "SHIPMENT",
        "SHIPPING_AGENT_CONTACT",
        "X_LANE"
      ]
    }
  }
};
