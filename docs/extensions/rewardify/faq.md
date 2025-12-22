---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
sidebar_position: 9
---

# Frequently Asked Questions

Common questions and answers about Rewardify.

## General Questions

### What is Rewardify?

Rewardify is a comprehensive gamification extension for Joomla that rewards users with points for various activities on your website. It helps increase user engagement, loyalty, and interaction.

### Which Joomla versions are supported?

Rewardify supports Joomla 5.3 and higher. For older Joomla versions (3.x, 4.x), we do not have supported extension.

### Is Rewardify free?

Rewardify is a commercial extension. A license is required for production use. 

### Can I try before buying?

Please contact support@shondalai.com for demo site access or visit our website https://demo.shondalai.com

---

## Installation & Setup

### How do I install Rewardify?

1. Download the package file
2. Go to System → Install → Extensions
3. Upload the pkg_rewardify.zip file
4. Enable required plugins
5. Configure point rules

**[Full installation guide →](getting-started.md)**

### Which plugins must I enable?

**Required:**
- User - Rewardify (for registration/login)
- Privacy - Rewardify (for GDPR compliance)

**Optional but recommended:**
- Content - Rewardify (for article points)
- Integration plugins (only if you use those extensions)

### Do I need to configure anything after installation?

Yes, recommended steps:
1. Review and enable point rules
2. Adjust point values
3. Configure profile/avatar settings
4. Publish leaderboard module
5. Test with a test user account

---

## Point Rules

### How do point rules work?

Point rules define when and how points are awarded. Each rule has:
- **Title** - Display name
- **Rule Name** - Unique identifier
- **Points** - Amount to award
- **Published** - Active or not
- **Access Level** - Who can earn
- **Rate Limit** - Prevention of duplicates

**[Complete guide to point rules →](point-rules.md)**

### Can I create custom point rules?

Yes! You can create custom rules for any activity:
1. Components → Rewardify → Point Rules
2. Click New
3. Configure the rule
4. Use Developer API to trigger it

### How do I award negative points?

To deduct points, enter a negative number:
- Example: `-5` will deduct 5 points
- Useful for penalties or corrections
- Common for deleted content

### What is rate limiting?

Rate limiting prevents users from earning points repeatedly for the same action:
- Set in days (0 = no limit)
- Example: Login once per day = 1 day limit
- Prevents abuse and spam

### Can points expire?

Yes, points can expire:
- **Rule-based:** Set "Expires In" days on rule
- **Individual:** Set "Publish Down" date on point entry
- **Permanent:** Leave expiration empty

---

## Managing Points

### How do I award points manually?

Two methods:

**Method 1:** Components → Rewardify → Points → New
**Method 2:** Components → Rewardify → User Points → Select user → Award Points

**[Full guide →](managing-points.md)**

### Can I deduct points from users?

Yes:
- Award negative points (-25 deducts 25 points)
- Or delete specific point entries
- Add reason in title/description

### How do I view a user's point history?

1. Components → Rewardify → Points
2. Filter by specific user
3. View complete history with dates and reasons

### Can I export point data?

Yes:
- Use Joomla's built-in export features
- Or third-party export extensions
- Privacy plugin also exports on user request

### What happens to points when user is deleted?

The Privacy plugin automatically removes:
- All point entries
- User point totals
- Related data

This ensures GDPR compliance.

---

## Leaderboard

### How do I display the leaderboard?

1. Extensions → Modules
2. Find "Rewardify - Leaderboard"
3. Publish the module
4. Assign to menu items
5. Select position

**[Complete leaderboard guide →](leaderboard.md)**

### Can I have multiple leaderboards?

Yes! Create multiple instances:
- Duplicate the module
- Configure each differently
- Example: All-time + Monthly + Weekly

### How often does leaderboard update?

Updates depend on cache settings:
- **No cache:** Real-time updates
- **Cached:** Updates when cache expires
- Recommended: 30-minute cache for performance

### Can users opt-out of leaderboard?

Currently not built-in. This is a feature request for future versions.

### Can I exclude certain users?

Not built-in, but you can:
- Use access levels
- Create template override
- Custom development

---

## Plugins

### Which plugins do I need?

**Core plugins (enable always):**
- User - Rewardify
- Privacy - Rewardify

**Integration plugins (enable if you use them):**
- Content - Rewardify
- Community Builder - Rewardify
- HikaShop - Rewardify
- Kunena - Rewardify
- Others as needed

**[Plugin configuration guide →](plugins.md)**

### Why aren't my plugins working?

Check:
1. ✅ Plugin is enabled
2. ✅ Point rule is published
3. ✅ Point value is not zero
4. ✅ Access level is correct
5. ✅ Rate limit allows awards

**[Troubleshooting guide →](troubleshooting.md)**

### Can I create custom plugins?

Yes! Developers can create custom plugins:
- Use SubscriberInterface pattern
- Access Rewardify API
- Trigger point rules

**[Developer API →](rewardify-points-system-api.md)**

---

## Integration Questions

### Does Rewardify work with Community Builder?

Yes! Enable the Community Builder - Rewardify plugin to award points for:
- Profile updates
- Avatar uploads
- User connections
- Wall posts

### Can I integrate with HikaShop?

Yes! Two plugins available:
- **HikaShop - Rewardify:** Award points for purchases
- **HikaShop Payment - Rewardify:** Pay with points

### Does it work with Kunena forum?

Yes! Enable Kunena - Rewardify plugin for:
- Topic creation
- Post replies
- Best answers

### What about JomSocial?

Yes, JomSocial - Rewardify plugin is included.

### Can I integrate my custom extension?

Yes! Use the Developer API:
```php
$component = $app->bootComponent('com_rewardify');
if ($component instanceof UserPointsFactoryInterface) {
    $component->getUserPoints()->assign([
        'rule' => 'com_myextension.action',
        'userid' => $userId,
        'points' => 10,
        'title' => 'Custom Action',
    ]);
}
```

---

## Point Economy

### How many points should I award?

Start conservative and adjust:
- **Registration:** 1-5 points
- **Daily login:** 1-2 points
- **Article post:** 5-10 points
- **Comment:** 1-3 points
- **Streak bonus:** 10-20 points

Monitor user behavior and adjust.

### What's a good points-to-currency ratio?

For e-commerce sites:
- **Conservative:** 100 points = $1
- **Moderate:** 50 points = $1
- **Generous:** 20 points = $1

Test and adjust based on your profit margins.

### How do I prevent point inflation?

1. Use rate limiting
2. Set reasonable point values
3. Enable point expiration
4. Monitor and adjust regularly
5. Require approval for high-value actions

### Should points expire?

Depends on your goals:
- **No expiration:** Build long-term loyalty
- **Annual expiration:** Encourage active use
- **Quarterly expiration:** Drive urgent engagement

---

## Technical Questions

### What PHP version is required?

PHP 8.1 or higher is required for Joomla 6 compatibility.

### Does Rewardify affect performance?

Minimal impact if configured properly:
- Enable caching
- Use rate limiting
- Optimize database regularly
- Limit leaderboard size

### Is it compatible with caching?

Yes! Rewardify works with Joomla caching:
- Page cache: Compatible
- Module cache: Recommended
- Conservative cache: Best for leaderboard

### Can I use with CDN?

Yes, Rewardify is CDN-compatible. Static assets can be cached.

### How do I backup point data?

Regular Joomla database backups include:
- `#__rewardify_points`
- `#__rewardify_users`
- `#__rewardify_points_rules`

Use Akeeba Backup or similar tools.

---

## Security & Privacy

### Is Rewardify GDPR compliant?

Yes! The Privacy plugin provides:
- Data export on request
- Data deletion on account removal
- Transparency in data collection
- User consent mechanisms

### Can users cheat the system?

Protection measures included:
- Rate limiting
- Duplicate prevention
- Admin approval option
- Audit trail logging
- Access level restrictions

### How is point data secured?

- Stored in Joomla database
- Subject to Joomla ACL
- Protected by user permissions
- Encrypted if using HTTPS
- Regular security updates

---

## Troubleshooting

### Points not being awarded?

**Quick checklist:**
- [ ] Plugin enabled
- [ ] Rule published
- [ ] Points not zero
- [ ] Correct access level
- [ ] Rate limit allows
- [ ] Cache cleared

**[Full troubleshooting guide →](troubleshooting.md)**

### Leaderboard not showing?

- Check module is published
- Verify position exists
- Ensure users have points
- Clear cache

### Getting error messages?

Check:
1. Joomla error log
2. PHP error log
3. Database connectivity
4. Extension updates available

**[Common errors and solutions →](troubleshooting.md)**

---

## Upgrading & Updates

### How do I update Rewardify?

1. Backup your site and database
2. Download latest version
3. Install via extension manager
4. Joomla handles the update
5. Test functionality

### Will updates affect my data?

No, updates preserve:
- Existing points
- User data
- Point rules
- Configuration

Always backup before updating!

### Can I downgrade if needed?

Not recommended, but possible:
- Restore from backup
- Manual database rollback
- Contact support for assistance

### How do I check my version?

Extensions → Manage → Components → Rewardify

---

## Support

### How do I get support?

1. **Documentation:** Read the guides first
2. **Forum:** https://shondalai.com/support
3. **Email:** support@shondalai.com
4. **Emergency:** Contact for priority support options

### What information should I provide?

When requesting support, include:
- Joomla version
- PHP version
- Rewardify version
- Error messages
- Steps to reproduce
- Screenshots if relevant

### Is there a support forum?

Yes! Visit https://shondalai.com/support for:
- Community discussions
- Feature requests
- Bug reports
- Tips and tricks

### Can I request features?

Absolutely! We welcome feature requests:
- Submit via support forum
- Email detailed requirements
- Consider custom development for urgent needs

---

## Licensing & Commercial

### Do I need a license for each site?

License terms vary. Check your purchase agreement or contact sales.

### Can I use on localhost?

Yes, testing on localhost is typically allowed.

### Is white-labeling available?

For white-label and OEM options, contact sales@shondalai.com.

### Do you offer refunds?

Refund policy varies by purchase agreement. Contact support.

---

## Still Have Questions?

**Can't find your answer?**

- 📖 [Read the complete documentation](overview.md)
- 💬 [Visit the support forum](https://shondalai.com/get-support/)

**Found a bug?**
Please report it with detailed steps to reproduce.

**Have a feature idea?**
We'd love to hear it! Submit your suggestions.

---

**Last Updated:** December 2025  
**Documentation Version:** 1.2.0

