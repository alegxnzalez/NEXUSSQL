// REMARK_QUAL.js

window.REMARK_QUAL = {
  "tables": {
    "REMARK_QUAL": {
      "columns": {
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "REMARK_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "REMARK_QUAL_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "REMARK_LEVEL": {
          "type": "NUMBER(2)",
          "nullable": false,
          "info": "Level of importance of the Remark. "
        },
        "IS_VISIBLE_IF_MASTER_CARR": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies whether the remarks with this qualifier should display on related shipments. "
        },
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": false,
          "values": [
            "UPDATE_OK",
            "UPDATE_NOT_OK",
            "MANY"
          ],
          "info": "Specifies if the remark qualifier can exist on the business object multiple times, or is restricted to occur only once and whether the value is allowed to be updated. "
        },
        "TEXT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TEXT_TEMPLATE",
          "info": "Default remark text. "
        },
        "QUAL_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "TEXT",
            "BOOLEAN",
            "DATE",
            "DATE_TIME",
            "WEIGHT",
            "VOLUME",
            "NUMBER",
            "FIXED LIST"
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
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "Remark Qualifier must be visible only for object that you have chosen in Data Query Type "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Release ID specifying the OTM version of the record."
        }
      },
      "fk_tables": [
        "APPOINTMENT_REMARK",
        "CLAIM_REMARK",
        "CONSOL_REMARK",
        "CR_FORECAST_REMARK",
        "CR_ROUTE_REMARK",
        "DEVICE_REMARK",
        "DM_TRANSACTION_REMARK",
        "DOMAIN_REMARK",
        "DRIVER_REMARK",
        "DRIVER_TYPE_REMARK",
        "EQUIPMENT_GROUP_REMARK",
        "EQUIPMENT_REMARK",
        "EQUIPMENT_TYPE_REMARK",
        "ESG_ACTIVITY_REMARK",
        "ESG_ACT_RULE_REMARK",
        "ESG_ACT_TYPE_ATTRIBUTE",
        "GROUND_SCHEDULE_REMARK",
        "GTM_BOND_REMARK",
        "GTM_CAMPAIGN_REMARK",
        "GTM_CA_LINE_REMARK",
        "GTM_COMPLIANCE_RULE_REMARK",
        "GTM_CRULE_ITEM_REMARK",
        "GTM_CRULE_PARTY_REMARK",
        "GTM_CRULE_TRANSLINE_REMARK",
        "GTM_CRULE_TRANS_REMARK",
        "GTM_DECL_MESSAGE_REMARK",
        "GTM_ENTRY_EXIT_PROF_REMARK",
        "GTM_ITEM_CLASS_REMARK",
        "GTM_LICENSE_LINE_REMARK",
        "GTM_LICENSE_REMARK",
        "GTM_PARTY_REMARK",
        "GTM_REGISTRATION_REMARK",
        "GTM_STRUCTURE_REMARK",
        "GTM_STR_COMPONENT_REMARK",
        "GTM_TA_REMARK",
        "GTM_TIP_AUTH_REMARK",
        "GTM_TIP_REMARK",
        "GTM_TIP_RULE_REMARK",
        "GTM_TRANSACTION_REMARK",
        "GTM_TRANS_LINE_REMARK",
        "GTM_TR_ITEM_STRUCTURE_REMARK",
        "IE_SPECIAL_SERVICE_REMARK",
        "IE_SS_REMARK",
        "ITEM_QF_REMARK",
        "ITEM_REMARK",
        "JOB_REMARK",
        "LANE_REMARK",
        "LOCATION_REMARK",
        "OB_LINE_REMARK",
        "OB_RELEASE_INSTRUCTION_REMARK",
        "OB_REMARK",
        "OB_SHIP_UNIT_REMARK",
        "OB_SU_CONTENT_REMARK",
        "OB_SU_RELEASE_INSTR_REMARK",
        "OMR_D_LINE_REMARK",
        "ORDER_MOVEMENT_REMARK",
        "ORDER_RELEASE_LINE_REMARK",
        "ORDER_RELEASE_REMARK",
        "ORL_ACCESSORIAL_REMARK",
        "OR_STOP_REMARK",
        "PACKAGED_ITEM_REMARK",
        "PARTNER_ITEM_REMARK",
        "PKG_ITEM_ACCESSORIAL_REMARK",
        "POWER_UNIT_REMARK",
        "PU_TYPE_REMARK",
        "P_BID_REMARK",
        "QUOTE_COST_OPTION_REMARK",
        "QUOTE_REMARK",
        "RATE_GEO_REMARK",
        "RATE_OFFERING_REMARK",
        "REMARK_QUAL_ASSET_ATTRIBUTE",
        "REMARK_QUAL_TEXT",
        "RESOURCE_SCHEDULE_REMARK",
        "RES_SCH_INST_REMARK",
        "ROUTE_INSTANCE_LEG_REMARK",
        "ROUTE_INSTANCE_REMARK",
        "ROUTE_TEMPLATE_LEG_REMARK",
        "ROUTE_TEMPLATE_REMARK",
        "SERVPROV_TENDER_COMMENT",
        "SHIPMENT_ACCESSORIAL_REMARK",
        "SHIPMENT_COST_REMARK",
        "SHIPMENT_INF_COST_REMARK",
        "SHIPMENT_REMARK",
        "SHIPMENT_SPEC_SERVICE_REMARK",
        "SHIPMENT_STOP_REMARK",
        "SHIP_GROUP_D_OR_REMARK",
        "SHIP_GROUP_D_REMARK",
        "SHIP_GROUP_REMARK",
        "SHIP_UNIT_LINE_REMARK",
        "SHIP_UNIT_REMARK",
        "SHIP_UNIT_SPEC_ACC_REMARK",
        "SKU_EVENT_REMARK",
        "S_SHIP_UNIT_LINE_REMARK",
        "S_SHIP_UNIT_REMARK",
        "S_SUL_ACCESSORIAL_REMARK",
        "VOUCHER_REMARK"
      ]
    }
  }
};
