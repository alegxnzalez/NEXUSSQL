// INVOLVED_PARTY_QUAL.js

window.INVOLVED_PARTY_QUAL = {
  "tables": {
    "INVOLVED_PARTY_QUAL": {
      "columns": {
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "INVOLVED_PARTY_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "INVOLVED_PARTY_QUAL_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": false,
          "values": [
            "UPDATE_OK",
            "UPDATE_NOT_OK",
            "MANY"
          ],
          "info": "Specifies if the qualifier can exist on a business object multiple times, or is restricted to occur only once and whether the value is allowed to be updated. If the value is MANY, then the object can have multiple values for the same qualifier. If the value is either UPDATE_OK or UPDATE_NOT_OK, then the rule is in effect, meaning only one value is allowed for a given qualifier. In the case of UPDATE_NOT_OK, the value may not be modified. "
        },
        "FROM_ADDR_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "Configurable 'From-Address' contact details."
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
        "BN_NAMED_RANGE_INV_PARTY",
        "CHARTER_VOYAGE_INVOLVED_PARTY",
        "CLAIM_INVOLVED_PARTY",
        "CONSOL_INVOLVED_PARTY",
        "CORPORATION_INVOLVED_PARTY",
        "CUSTOMER_ACCOUNT_NUMBER",
        "DM_RULE",
        "DM_TRANSACTION_INVOLVED_PARTY",
        "DRIVER_INV_PARTY",
        "GTM_BOND_INV_PARTY",
        "GTM_CAMPAIGN_INVOLVED_PARTY",
        "GTM_CA_LINE_INV_PARTY",
        "GTM_COMPLIANCE_RULE_COUNTRY",
        "GTM_COMPLIANCE_RULE_REGION",
        "GTM_CRULE_DOCUMENT_REVIEWER",
        "GTM_CRULE_DOCUMENT_SUBSCRIBER",
        "GTM_CRULE_PARTY_REFNUM",
        "GTM_CRULE_PARTY_REMARK",
        "GTM_CRULE_PARTY_TYPE_CODE",
        "GTM_LICENSE_INVOLVED_PARTY",
        "GTM_LICENSE_REGION",
        "GTM_PARTY_LIST_GROUP_D",
        "GTM_REG_INVOLVED_PARTY",
        "GTM_RULE_RESTRICTION",
        "GTM_STRUCTURE_INVOLVED_PARTY",
        "GTM_TRANSACTION_INVOLVED_PARTY",
        "GTM_TRANSACTION_INV_LOCATION",
        "GTM_TRANS_LINE_INV_PARTY",
        "GTM_TRANS_REQD_REVIEWER",
        "GTM_TRANS_REQD_SUBSCRIBE",
        "GTM_TR_CONTROL_SCREEN",
        "IE_SS_MATCH_OBJ_INV_PARTY",
        "INVOICE_INVOLVED_PARTY",
        "JOB_INVOLVED_PARTY",
        "LEG_INVOLVED_PARTY",
        "MESSAGE_TYPE",
        "NFRC_RULE",
        "NFRC_RULE_INV_PARTY",
        "NFRC_RULE_INV_PARTY_CRITERIA",
        "NFRC_RULE_JOB_INV_PARTY",
        "NOTIFY_SUBJECT_CONTACT",
        "NOTIFY_SUBJECT_INVPARTY",
        "OB_INVOLVED_PARTY",
        "OB_LINE_INVOLVED_PARTY",
        "OB_SU_CONTENT_INV_PARTY",
        "OB_SU_INVOLVED_PARTY",
        "ORDER_MOVEMENT_INV_PARTY",
        "ORDER_RELEASE_INV_PARTY",
        "ORDER_RELEASE_LINE_INV_PARTY",
        "QUOTE_INVOLVED_PARTY",
        "RATE_LOAD_DEFINITION_INV_PARTY",
        "RATE_OFFERING_INV_PARTY",
        "REPETITION_SCHEDULE_INV_PARTY",
        "ROUTE_INSTANCE_INV_PARTY",
        "ROUTE_INSTANCE_LEG_INV_PARTY",
        "ROUTE_TEMPLATE_INV_PARTY",
        "ROUTE_TEMPLATE_LEG_INV_PARTY",
        "SC_INVOLVED_PARTY",
        "SECONDARY_CHARGE_RULE",
        "SHIPMENT_INVOLVED_PARTY",
        "SHIPMENT_REQDOC_REVIEWER",
        "SHIPMENT_REQDOC_SUBSCRIBER",
        "SHIPMENT_STOP_INV_PARTY",
        "SHIPMENT_STOP_SU_INV_PARTY",
        "SHIPPING_AGENT_CONTACT",
        "SHIP_GROUP_INVOLVED_PARTY",
        "SHIP_GROUP_RULE",
        "SHIP_GROUP_RULE_INV_PARTY",
        "SKU_INVOLVED_PARTY",
        "TRANSACTIONAL_EVENT_CONTACT",
        "TRANSACTIONAL_EVENT_INVPARTY",
        "TRANSPORT_NETWORK_INV_PARTY",
        "VAT_CONFIGURATION_PERSPECTIVE",
        "VAT_PROVINCIAL_CNFG_PERSP"
      ]
    }
  }
};
