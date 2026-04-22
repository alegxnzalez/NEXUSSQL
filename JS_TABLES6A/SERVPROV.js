// SERVPROV.js

window.SERVPROV = {
  "tables": {
    "SERVPROV": {
      "columns": {
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The service provider GID. "
        },
        "SERVPROV_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The service provider XID. "
        },
        "TENDER_RESPONSE_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The expected response time by this service provider for shipment tenders. "
        },
        "TENDER_RESPONSE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for TENDER_RESPONSE_TIME column. "
        },
        "TENDER_RESPONSE_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Tender response time in base units. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "A GID to define the mode profiles(group) that the service provider uses. "
        },
        "MATCH_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MATCH_RULE_PROFILE",
          "info": "The GID for the match rule profile. Match Rule Profile Invoices are matched with existing shipments using an ordered list of rules. The Match Rule Profile is a group of service providers that follow the same rules for matching invoices to shipments. "
        },
        "MATCH_VALID_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MATCH_VALID_RULE_PROFILE",
          "info": "A profile for the match validation rules that should be tested if the Validate Match action is run on an invoice for this service provider. "
        },
        "AUTO_PAYMENT_FLAG": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Mark Autopay to have Oracle Transportation Management automatically create an invoice with every shipment for this service provider. Clear the check box, if you want to generate invoices manually in Settlement instead. "
        },
        "AUTO_APPROVE_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AUTO_APPROVE_RULE_PROFILE",
          "info": "The GID for the auto approve rule profile. "
        },
        "ALLOCATION_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ALLOCATION_RULE_PROFILE",
          "info": "The GID for the allocation rule profile. Allocation Rule Profile governs how your shipping costs are allocated. "
        },
        "IS_DISPATCH_BY_REGION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "A flag to turn on/off the Tender by Locale feature. "
        },
        "ALLOW_TENDER": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "Allow Tender determines whether the system can automatically tender (ordinary tender as opposed to Broadcast or Spot Bid tenders mentioned below) shipments to this service provider. Clear the check box to prevent the system from automatically tendering shipments to this service provider. If you have not loaded any rates into the system but still want to be able to create shipments, you may want to set up a dummy service provider with this check box cleared. You must mark this check box if you also plan to configure Broadcast/Spot Bid tendering for the service provider.\nNote: Setting up a service provider's tender timeout requirements is done via the Contact Manager Notification Tab. "
        },
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OUT_XML_PROFILE",
          "info": "Associates the service provider with an out_xml_profile, which helps define the content of outgoing XML to this service provider. "
        },
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE",
          "info": "Rate Service GID. This will be the default Rate Service used to re-drive the shipment if the service provider does not have a rate offering that matches the shipment "
        },
        "IS_ACCEPT_SPOT_BIDS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Is set to Y(es) if the service provider will participate in spot bid tendering. "
        },
        "IS_ACCEPT_BROADCAST_TENDERS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Is set to Y(es) if the service provider will participate in broadcast tendering. "
        },
        "IS_LOCALIZE_BROADCAST_CONTACT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "N",
            "Y"
          ],
          "info": "If \"Y\", use the preference /language, etc. of BROADCAST_SPOT_CONTACT. Otherwise, use shipment's LOGISTICS involved party's preference is used for broadcast notification. "
        },
        "SPOT_RATE_ADJUSTMENT_FACTOR": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Spot Rate Adjustment Factor is the percentage factor to be applied to the spot rate for a service provider to adjust the spot rate for service provider performance. For example, 10% means a spot rate of $100 will be adjusted to 100 + 0.1 * 100 = $110. "
        },
        "BROADCAST_SPOT_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "Overrides the shipper's primary contact to be used to determine localization preferences for tender notification. "
        },
        "DO_CONDITIONAL_ACCEPTS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Determines if the service provider can participate in conditional booking. "
        },
        "IS_INTERNAL_NVOCC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Internal NVOCC check box identifies whether the service provider acts as an NVOCC (Non-Vessel Operating Common Carrier). If this check box is marked, you can use the Book with Internal NVOCC action from a sell shipment (that is assigned a service provider with this setting) on a job to create buy shipments and link them to a new job. "
        },
        "NVOCC_DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The NVOCC Domain field determines the domain in which the buy shipments and new job are created. "
        },
        "IS_ACCEPT_BY_SSU_ALLOWED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Mark the Allow Accept By Ship Unit check box to let a service provider partially accept a tender by its shipment's Transport Handling Units. Allowing a service provider to partially accept a tender gives service providers a role on the planning process. A new shipment and tender are created based off the amount the Service provider accepts. The original tender (minus the partially accepted units) is still available for future tendering. "
        },
        "IS_COPY_INV_DELTA_BACK_TO_SHIP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "The Copy Invoice Delta to Shipment check box indicates whether differences between the approved amount and the amount on the actual invoice should be copied to the shipment. So for example, the shipment was $100, and the invoice was $100, but only $80 was approved and this check box was selected. Then the change, or delta, of $20 will be added to the shipment as an extra adjustment charge. This is not supported when the parent/consolidated invoice is approved by total. "
        },
        "INVOICING_PROCESS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "B",
            "S"
          ],
          "info": "The Invoicing Process drop-down list box determines what type of invoice will be generated for shipments from this carrier. If it is set to Standard, then regular invoices will be generated. If you set it to BOL Back, then a BOL Back will be generated. BOL backs are often used for ocean shipments. "
        },
        "LINE_APPROVE_TOL_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LINE_APPROVE_TOL_PROFILE",
          "info": "Indicates the line approval tolerance rule profile to apply. "
        },
        "SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "The Standard Carrier Alpha Code for this Service Provider. "
        },
        "EQUIPMENT_MARK_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_MARK_LIST",
          "info": "The Equipment Mark List for this Service Provider. "
        },
        "IS_MINORITY": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Select the Minority check box if the business is minority-owned. "
        },
        "INCUMBENT": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Select the Incumbent check box to indicate that this service provider has been used previously. "
        },
        "TIER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Enter a value in the Tier field to assign a numerical value to a service provider. The tier value is used to signify which service providers are more important than others. "
        },
        "SCORECARD_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "If you use a scorecard to organize your bids, enter a value in the Scorecard Value field. "
        },
        "EPA_INDEX_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "If the provider participates in the EPA Smartway program, record it's SIF in the EPA Smartway SIF field. "
        },
        "IS_FLEET": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Only shipments created for fleet service providers can perform fleet related actions. "
        },
        "SOURCING_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the contact at the service provider who is responsible for sourcing activities. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "ALLOW_SPOT_RATING": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Flag to indicate that service provider is valid for Spot Rating actions "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "OBT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Associates the service provider with an online_booking_xml_profile, Which helps to define the content of XML to this service provider for UI display."
        }
      },
      "fk_tables": [
        "BULK_PLAN_BY_SERVPROV",
        "BULK_PLAN_PARTITION_SERVPROV",
        "CAPACITY_COMMITMENT_ALLOC_D",
        "CAPACITY_GROUP",
        "CAPACITY_OVERRIDE_LINE",
        "CHARTER_VOYAGE",
        "COMMIT_ALLOC_USAGE_D",
        "CONSOL",
        "CRT_LOAD_PROCESS",
        "CUSTOMER_ACCOUNT_NUMBER",
        "E_KPI_TARGET_VALUE_TYPE",
        "INTERIM_FLIGHT",
        "INTERIM_FLIGHT_INSTANCE",
        "INVOICE",
        "LANE_TENDER_INFO",
        "LOCATION_SERVPROV_PREF",
        "LOGISTICS_GUIDE_AGGREGATE_DATA",
        "LOGISTICS_GUIDE_DETAIL",
        "MATCH_RULE_SERVPROV",
        "NFRC_RULE",
        "OB_LEG_CONSTRAINT",
        "OB_ORDER_BASE",
        "OPERATIONAL_LOCATION_D",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "ORDER_ROUTING_RULE_D",
        "P_BID",
        "P_SHIPMENT",
        "QUOTE",
        "QUOTE_COST_OPTION_SHIPMENT",
        "RATE_OFFERING",
        "ROUTE_INSTANCE",
        "ROUTE_TEMPLATE",
        "SC_RULE_CONTRACT",
        "SECONDARY_CHARGE_RULE",
        "SERVPROV_ALIAS",
        "SERVPROV_CB_PROFILE",
        "SERVPROV_POLICY",
        "SERVPROV_PROFILE_DETAIL",
        "SERVPROV_SERVICE",
        "SG_STATUS_HISTORY",
        "SHIPMENT",
        "SHIP_COMMIT_ALLOC_JOIN",
        "SHIP_GROUP",
        "SHIP_GROUP_RULE",
        "SS_STATUS_HISTORY",
        "TENDER_COLLAB_SERVPROV",
        "UDC_CLASSIFICATION_LIST_D",
        "VOYAGE",
        "X_OAG_SERVPROV_MAP",
        "X_VOY_CAR_MAP"
      ]
    }
  }
};
